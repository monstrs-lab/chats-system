import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSetDefaultHistoryTTLValues {
  period: number
}

export class MessagesSetDefaultHistoryTTL extends TLMethod<MessagesSetDefaultHistoryTTLValues> {
  static override CONSTRUCTOR_ID = -1632299963
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
