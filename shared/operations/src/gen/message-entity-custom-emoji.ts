import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageEntityCustomEmojiValues {
  offset: number
  length: number
  documentId: bigint
}

export class MessageEntityCustomEmoji extends TLConstructor<MessageEntityCustomEmojiValues> {
  static override CONSTRUCTOR_ID: number = -925956616
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'offset',
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
      name: 'length',
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

  get offset(): number {
    return this.getParamValue<number>('offset')
  }

  get length(): number {
    return this.getParamValue<number>('length')
  }

  get documentId(): bigint {
    return this.getParamValue<bigint>('documentId')
  }
}
