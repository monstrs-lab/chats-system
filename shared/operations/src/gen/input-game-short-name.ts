import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputGameShortNameValues {
  botId: any
  shortName: string
}

export class InputGameShortName extends TLConstructor<InputGameShortNameValues> {
  static override CONSTRUCTOR_ID: number = -1020139510
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bot_id',
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
      name: 'short_name',
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

  get botId(): any {
    return this.getParamValue<any>('botId')
  }

  get shortName(): string {
    return this.getParamValue<string>('shortName')
  }
}
