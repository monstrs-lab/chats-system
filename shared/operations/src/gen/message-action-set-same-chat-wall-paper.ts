import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSetSameChatWallPaperValues {
  wallpaper: any
}

export class MessageActionSetSameChatWallPaper extends TLConstructor<MessageActionSetSameChatWallPaperValues> {
  static override CONSTRUCTOR_ID: number = -1065845395
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'wallpaper',
      type: 'WallPaper',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get wallpaper(): any {
    return this.getParamValue<any>('wallpaper')
  }
}
