import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetBotAppValues {
  app: any
  hash: bigint
}

export class MessagesGetBotApp extends TLMethod<MessagesGetBotAppValues> {
  static override CONSTRUCTOR_ID = 889046467
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'app',
      type: 'InputBotApp',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get app(): any {
    return this.getParamValue<any>('app')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
