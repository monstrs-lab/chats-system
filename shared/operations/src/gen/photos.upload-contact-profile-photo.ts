import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhotosUploadContactProfilePhotoValues {
  flags: any
  suggest: boolean
  save: boolean
  userId: any
  file: any
  video: any
  videoStartTs: number
  videoEmojiMarkup: any
}

export class PhotosUploadContactProfilePhoto extends TLMethod<PhotosUploadContactProfilePhotoValues> {
  static override CONSTRUCTOR_ID = -515093903
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'suggest',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'save',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'file',
      type: 'InputFile',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video',
      type: 'InputFile',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_start_ts',
      type: 'double',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_emoji_markup',
      type: 'VideoSize',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get suggest(): boolean {
    return this.getParamValue<boolean>('suggest')
  }

  get save(): boolean {
    return this.getParamValue<boolean>('save')
  }

  get userId(): any {
    return this.getParamValue<any>('userId')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }

  get video(): any {
    return this.getParamValue<any>('video')
  }

  get videoStartTs(): number {
    return this.getParamValue<number>('videoStartTs')
  }

  get videoEmojiMarkup(): any {
    return this.getParamValue<any>('videoEmojiMarkup')
  }
}
