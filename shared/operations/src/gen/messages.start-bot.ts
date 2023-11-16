import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesStartBotValues {
  bot: any
  peer: any
  randomId: bigint
  startParam: string
}

export class MessagesStartBot extends TLMethod<MessagesStartBotValues> {
  static override CONSTRUCTOR_ID = -421563528
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
      name: 'peer',
      type: 'InputPeer',
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
      name: 'start_param',
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

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get randomId(): bigint {
    return this.getParamValue<bigint>('randomId')
  }

  get startParam(): string {
    return this.getParamValue<string>('startParam')
  }
}
