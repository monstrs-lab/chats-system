import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsReorderUsernamesValues {
  bot: any
  order: Array<string>
}

export class BotsReorderUsernames extends TLMethod<BotsReorderUsernamesValues> {
  static override CONSTRUCTOR_ID = -1760972350
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
      name: 'order',
      type: 'string',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get bot(): any {
    return this.getParamValue<any>('bot')
  }

  get order(): Array<string> {
    return this.getParamValue<Array<string>>('order')
  }
}
