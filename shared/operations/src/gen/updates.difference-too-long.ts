import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatesDifferenceTooLongValues {
  pts: number
}

export class UpdatesDifferenceTooLong extends TLConstructor<UpdatesDifferenceTooLongValues> {
  static override CONSTRUCTOR_ID: number = 1258196845
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'pts',
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

  get pts(): number {
    return this.getParamValue<number>('pts')
  }
}
