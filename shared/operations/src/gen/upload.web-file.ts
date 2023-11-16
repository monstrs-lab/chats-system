import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UploadWebFileValues {
  size: number
  mimeType: string
  fileType: any
  mtime: number
  bytes: Buffer
}

export class UploadWebFile extends TLConstructor<UploadWebFileValues> {
  static override CONSTRUCTOR_ID: number = 568808380
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'size',
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
      name: 'file_type',
      type: 'storage.FileType',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'mtime',
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
      name: 'bytes',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get size(): number {
    return this.getParamValue<number>('size')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }

  get fileType(): any {
    return this.getParamValue<any>('fileType')
  }

  get mtime(): number {
    return this.getParamValue<number>('mtime')
  }

  get bytes(): Buffer {
    return this.getParamValue<Buffer>('bytes')
  }
}
