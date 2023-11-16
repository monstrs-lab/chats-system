import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DocumentEmptyValues {
  id: bigint
}

export class DocumentEmpty extends TLConstructor<DocumentEmptyValues> {
  static override CONSTRUCTOR_ID: number = 922273905
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }
}
