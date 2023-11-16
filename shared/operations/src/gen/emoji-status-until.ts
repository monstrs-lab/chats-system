import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmojiStatusUntilValues {
  documentId: bigint
  until: number
}

export class EmojiStatusUntil extends TLConstructor<EmojiStatusUntilValues> {
  static override CONSTRUCTOR_ID: number = -97474361
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
    {
      name: 'until',
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

  get documentId(): bigint {
    return this.getParamValue<bigint>('documentId')
  }

  get until(): number {
    return this.getParamValue<number>('until')
  }
}
