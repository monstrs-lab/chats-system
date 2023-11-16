import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpPromoDataEmptyValues {
  expires: number
}

export class HelpPromoDataEmpty extends TLConstructor<HelpPromoDataEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1728664459
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'expires',
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

  get expires(): number {
    return this.getParamValue<number>('expires')
  }
}
