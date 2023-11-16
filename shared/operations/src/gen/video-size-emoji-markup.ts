import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface VideoSizeEmojiMarkupValues {
  emojiId: bigint
  backgroundColors: Array<number>
}

export class VideoSizeEmojiMarkup extends TLConstructor<VideoSizeEmojiMarkupValues> {
  static override CONSTRUCTOR_ID: number = -128171716
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'emoji_id',
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
      name: 'background_colors',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get emojiId(): bigint {
    return this.getParamValue<bigint>('emojiId')
  }

  get backgroundColors(): Array<number> {
    return this.getParamValue<Array<number>>('backgroundColors')
  }
}
