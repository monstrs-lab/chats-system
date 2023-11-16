import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DefaultHistoryTTLValues {
  period: number
}

export class DefaultHistoryTTL extends TLConstructor<DefaultHistoryTTLValues> {
  static override CONSTRUCTOR_ID: number = 1135897376
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
  ]

  get period(): number {
    return this.getParamValue<number>('period')
  }
}
