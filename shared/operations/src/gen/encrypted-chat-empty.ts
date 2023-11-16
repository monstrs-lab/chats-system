import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EncryptedChatEmptyValues {
  id: number
}

export class EncryptedChatEmpty extends TLConstructor<EncryptedChatEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1417756512
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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

  get id(): number {
    return this.getParamValue<number>('id')
  }
}
