import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmojiGroupValues {
  title: string
  iconEmojiId: bigint
  emoticons: Array<string>
}

export class EmojiGroup extends TLConstructor<EmojiGroupValues> {
  static override CONSTRUCTOR_ID: number = 2056961449
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'icon_emoji_id',
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
      name: 'emoticons',
      type: 'string',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get iconEmojiId(): bigint {
    return this.getParamValue<bigint>('iconEmojiId')
  }

  get emoticons(): Array<string> {
    return this.getParamValue<Array<string>>('emoticons')
  }
}
