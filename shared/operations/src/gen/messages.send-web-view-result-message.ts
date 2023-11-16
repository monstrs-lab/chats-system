import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSendWebViewResultMessageValues {
  botQueryId: string
  result: any
}

export class MessagesSendWebViewResultMessage extends TLMethod<MessagesSendWebViewResultMessageValues> {
  static override CONSTRUCTOR_ID = 172168437
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot_query_id',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'result',
      type: 'InputBotInlineResult',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get botQueryId(): string {
    return this.getParamValue<string>('botQueryId')
  }

  get result(): any {
    return this.getParamValue<any>('result')
  }
}
