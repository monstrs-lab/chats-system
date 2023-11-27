import 'reflect-metadata'

import type { TLObject }        from '@chats-system/tl'

import { RPC_HANDLER_METADATA } from './rpc-metadata.constants.js'

export const RpcHandler = (
    handler: new (...args: Array<any>) => InstanceType<typeof TLObject>
  ): ClassDecorator =>
  (target: object) => {
    Reflect.defineMetadata(RPC_HANDLER_METADATA, handler, target)
  }
