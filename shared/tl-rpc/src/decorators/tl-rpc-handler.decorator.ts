import 'reflect-metadata'

import type { TLObject }           from '@chats-system/tl'

import { TL_RPC_HANDLER_METADATA } from '../constants/index.js'

export const TLRpcHandler = (
    handler: new (...args: Array<any>) => InstanceType<typeof TLObject>
  ): ClassDecorator =>
  (target: object) => {
    Reflect.defineMetadata(TL_RPC_HANDLER_METADATA, handler, target)
  }
