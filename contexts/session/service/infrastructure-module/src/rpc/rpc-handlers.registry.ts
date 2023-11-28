import type { RpcMetadata }       from '@chats-system/core-rpc'
import type { TLObject }          from '@chats-system/tl'
import type { ExtractProperties } from '@monstrs/base-types'
import type { Type }              from '@nestjs/common'

import type { IRpcHandler }       from './rpc-handler.interfaces.js'
import type { SessionMetadata }   from './rpc-handler.interfaces.js'

import { ConnectError }           from '@connectrpc/connect'
import { Injectable }             from '@nestjs/common'
import { ModuleRef }              from '@nestjs/core'

import { RpcError }               from '@chats-system/core-rpc'
import { Exceptions }             from '@chats-system/tl'
import TL                         from '@chats-system/tl'

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

    try {
      return await handler.execute(request, session, metadata)
    } catch (error) {
      if (error instanceof ConnectError) {
        const rpcError = error.details.find((detail) => (detail as any).type === RpcError.typeName)

        if (rpcError) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          const rpcErrorMessage = RpcError.fromBinary((rpcError as any).value)

          if (rpcErrorMessage) {
            if ((Exceptions.Exceptions as any)[rpcErrorMessage.code][rpcErrorMessage.id]) {
              return new TL.RpcError({
                errorCode: rpcErrorMessage.code,
                errorMessage: rpcErrorMessage.id,
              })
            }
          }
        }
      }

      throw error
    }
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
