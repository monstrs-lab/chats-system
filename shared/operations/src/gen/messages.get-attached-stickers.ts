import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetAttachedStickersValues {
  media: any
}

export class MessagesGetAttachedStickers extends TLMethod<MessagesGetAttachedStickersValues> {
  static override CONSTRUCTOR_ID = -866424884
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'media',
      type: 'InputStickeredMedia',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get media(): any {
    return this.getParamValue<any>('media')
  }
}
