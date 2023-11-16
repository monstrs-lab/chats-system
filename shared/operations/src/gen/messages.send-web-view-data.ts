import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSendWebViewDataValues {
  bot: any
  randomId: bigint
  buttonText: string
  data: string
}

export class MessagesSendWebViewData extends TLMethod<MessagesSendWebViewDataValues> {
  static override CONSTRUCTOR_ID = -603831608
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'random_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'button_text',
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
      name: 'data',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get randomId(): bigint {
    return this.getParamValue<bigint>('randomId')
  }

  get buttonText(): string {
    return this.getParamValue<string>('buttonText')
  }

  get data(): string {
    return this.getParamValue<string>('data')
  }
}
