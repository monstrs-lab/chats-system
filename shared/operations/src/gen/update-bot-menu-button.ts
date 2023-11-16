import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateBotMenuButtonValues {
  botId: bigint
  button: any
}

export class UpdateBotMenuButton extends TLConstructor<UpdateBotMenuButtonValues> {
  static override CONSTRUCTOR_ID: number = 347625491
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot_id',
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
      name: 'button',
      type: 'BotMenuButton',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get botId(): bigint {
    return this.getParamValue<bigint>('botId')
  }

  get button(): any {
    return this.getParamValue<any>('button')
  }
}
