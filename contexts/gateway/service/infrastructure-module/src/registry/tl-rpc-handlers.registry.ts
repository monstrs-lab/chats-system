import type { TLObject }           from '@monstrs/mtproto-tl-core'
import type { Type }               from '@nestjs/common'

import type { ITLRpcHandler }      from '../interfaces/index.js'
import type { TLRpcMetadata }      from '../interfaces/index.js'

import { Injectable }              from '@nestjs/common'
import { ModuleRef }               from '@nestjs/core'

import { TL_RPC_HANDLER_METADATA } from '../constants/index.js'

@Injectable()
export class TLRpcHandlersRegistry {
  private handlers = new Map<
    new (...args: Array<any>) => InstanceType<typeof TLObject>,
    ITLRpcHandler
  >()

  constructor(private readonly moduleRef: ModuleRef) {}

  async execute(
    request: InstanceType<typeof TLObject>,
    metadata: TLRpcMetadata
  ): Promise<InstanceType<typeof TLObject>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const handler = this.handlers.get((request as any).constructor)

    if (!handler) {
      throw new Error(`Invoke unknown type: ${request.constructorId}`)
    }

    return handler.execute(request, metadata)
  }

  register(handlers: Array<Type<ITLRpcHandler>>): void {
    handlers.forEach((handler) => {
      this.registerHandler(handler)
    })
  }

  protected registerHandler(handler: Type<ITLRpcHandler>): void {
    const instance = this.moduleRef.get(handler, { strict: false })

    if (!instance) {
      return
    }

    const target = Reflect.getMetadata(TL_RPC_HANDLER_METADATA, handler) as new (
      ...args: Array<any>
    ) => InstanceType<typeof TLObject>

    if (target) {
      this.handlers.set(target, instance)
    }
  }
}
