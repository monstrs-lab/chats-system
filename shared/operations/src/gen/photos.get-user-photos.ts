import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhotosGetUserPhotosValues {
  userId: any
  offset: number
  maxId: bigint
  limit: number
}

export class PhotosGetUserPhotos extends TLMethod<PhotosGetUserPhotosValues> {
  static override CONSTRUCTOR_ID = -1848823128
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'max_id',
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
      name: 'limit',
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

  get userId(): any {
    return this.getParamValue<any>('userId')
  }

  get offset(): number {
    return this.getParamValue<number>('offset')
  }

  get maxId(): bigint {
    return this.getParamValue<bigint>('maxId')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }
}
