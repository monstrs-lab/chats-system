import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMediaUploadedDocumentValues {
  flags: any
  nosoundVideo: boolean
  forceFile: boolean
  spoiler: boolean
  file: any
  thumb: any
  mimeType: string
  attributes: Array<any>
  stickers: Array<any>
  ttlSeconds: number
}

export class InputMediaUploadedDocument extends TLConstructor<InputMediaUploadedDocumentValues> {
  static override CONSTRUCTOR_ID: number = 1530447553
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
      name: 'nosound_video',
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
      name: 'force_file',
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
      name: 'spoiler',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'file',
      type: 'InputFile',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'thumb',
      type: 'InputFile',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'mime_type',
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
      name: 'attributes',
      type: 'DocumentAttribute',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'stickers',
      type: 'InputDocument',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'ttl_seconds',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get nosoundVideo(): boolean {
    return this.getParamValue<boolean>('nosoundVideo')
  }

  get forceFile(): boolean {
    return this.getParamValue<boolean>('forceFile')
  }

  get spoiler(): boolean {
    return this.getParamValue<boolean>('spoiler')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }

  get thumb(): any {
    return this.getParamValue<any>('thumb')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }

  get attributes(): Array<any> {
    return this.getParamValue<Array<any>>('attributes')
  }

  get stickers(): Array<any> {
    return this.getParamValue<Array<any>>('stickers')
  }

  get ttlSeconds(): number {
    return this.getParamValue<number>('ttlSeconds')
  }
}
