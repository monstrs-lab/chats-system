import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmojiStatusValues {
  documentId: bigint
}

export class EmojiStatus extends TLConstructor<EmojiStatusValues> {
  static override CONSTRUCTOR_ID: number = -1835310691
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'document_id',
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

  get documentId(): bigint {
    return this.getParamValue<bigint>('documentId')
  }
}
