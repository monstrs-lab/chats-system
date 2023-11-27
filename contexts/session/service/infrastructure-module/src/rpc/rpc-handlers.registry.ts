import type { RpcMetadata }       from '@chats-system/core-rpc'
import type { TLObject }          from '@chats-system/tl'
import type { ExtractProperties } from '@monstrs/base-types'
import type { Type }              from '@nestjs/common'

import type { IRpcHandler }       from './rpc-handler.interfaces.js'
import type { SessionMetadata }   from './rpc-handler.interfaces.js'

import { Injectable }             from '@nestjs/common'
import { ModuleRef }              from '@nestjs/core'

import { RPC_HANDLER_METADATA }   from './rpc-metadata.constants.js'

@Injectable()
export class RpcHandlersRegistry {
  private handlers = new Map<
    new (...args: Array<any>) => InstanceType<typeof TLObject>,
    IRpcHandler
  >()

  constructor(private readonly moduleRef: ModuleRef) {}

  async execute(
    request: InstanceType<typeof TLObject>,
    session: SessionMetadata,
    metadata: ExtractProperties<RpcMetadata>
  ): Promise<InstanceType<typeof TLObject>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const handler = this.handlers.get((request as any).constructor)

    if (!handler) {
      throw new Error(
        `Invoke unknown type: ${request.className} ${request.classType} ${request.constructorId}`
      )
    }

    return handler.execute(request, session, metadata)
  }

  register(handlers: Array<Type<IRpcHandler>>): void {
    handlers.forEach((handler) => {
      this.registerHandler(handler)
    })
  }

  protected registerHandler(handler: Type<IRpcHandler>): void {
    const instance = this.moduleRef.get(handler, { strict: false })

    if (!instance) {
      return
    }

    const target = Reflect.getMetadata(RPC_HANDLER_METADATA, handler) as new (
      ...args: Array<any>
    ) => InstanceType<typeof TLObject>

    if (target) {
      this.handlers.set(target, instance)
    }
  }
}
