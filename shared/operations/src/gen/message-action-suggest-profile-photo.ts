import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSuggestProfilePhotoValues {
  photo: any
}

export class MessageActionSuggestProfilePhoto extends TLConstructor<MessageActionSuggestProfilePhotoValues> {
  static override CONSTRUCTOR_ID: number = 1474192222
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'photo',
      type: 'Photo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get photo(): any {
    return this.getParamValue<any>('photo')
  }
}
