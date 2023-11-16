import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhotosPhotosValues {
  photos: Array<any>
  users: Array<any>
}

export class PhotosPhotos extends TLConstructor<PhotosPhotosValues> {
  static override CONSTRUCTOR_ID: number = -1916114267
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'photos',
      type: 'Photo',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get photos(): Array<any> {
    return this.getParamValue<Array<any>>('photos')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
