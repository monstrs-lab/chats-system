import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AutoDownloadSettingsValues {
  flags: any
  disabled: boolean
  videoPreloadLarge: boolean
  audioPreloadNext: boolean
  phonecallsLessData: boolean
  photoSizeMax: number
  videoSizeMax: bigint
  fileSizeMax: bigint
  videoUploadMaxbitrate: number
}

export class AutoDownloadSettings extends TLConstructor<AutoDownloadSettingsValues> {
  static override CONSTRUCTOR_ID: number = -1896171181
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
      name: 'disabled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_preload_large',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'audio_preload_next',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'phonecalls_less_data',
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
      name: 'photo_size_max',
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
      name: 'video_size_max',
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
      name: 'file_size_max',
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
      name: 'video_upload_maxbitrate',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get disabled(): boolean {
    return this.getParamValue<boolean>('disabled')
  }

  get videoPreloadLarge(): boolean {
    return this.getParamValue<boolean>('videoPreloadLarge')
  }

  get audioPreloadNext(): boolean {
    return this.getParamValue<boolean>('audioPreloadNext')
  }

  get phonecallsLessData(): boolean {
    return this.getParamValue<boolean>('phonecallsLessData')
  }

  get photoSizeMax(): number {
    return this.getParamValue<number>('photoSizeMax')
  }

  get videoSizeMax(): bigint {
    return this.getParamValue<bigint>('videoSizeMax')
  }

  get fileSizeMax(): bigint {
    return this.getParamValue<bigint>('fileSizeMax')
  }

  get videoUploadMaxbitrate(): number {
    return this.getParamValue<number>('videoUploadMaxbitrate')
  }
}
