import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSetMessagesTTLValues {
  flags: any
  period: number
  autoSettingFrom: bigint
}

export class MessageActionSetMessagesTTL extends TLConstructor<MessageActionSetMessagesTTLValues> {
  static override CONSTRUCTOR_ID: number = 1007897979
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'period',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'auto_setting_from',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get period(): number {
    return this.getParamValue<number>('period')
  }

  get autoSettingFrom(): bigint {
    return this.getParamValue<bigint>('autoSettingFrom')
  }
}
