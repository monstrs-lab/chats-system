import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UploadSaveBigFilePartValues {
  fileId: bigint
  filePart: number
  fileTotalParts: number
  bytes: Buffer
}

export class UploadSaveBigFilePart extends TLMethod<UploadSaveBigFilePartValues> {
  static override CONSTRUCTOR_ID = -562337987
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'file_id',
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
      name: 'file_part',
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
      name: 'file_total_parts',
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

  get fileId(): bigint {
    return this.getParamValue<bigint>('fileId')
  }

  get filePart(): number {
    return this.getParamValue<number>('filePart')
  }

  get fileTotalParts(): number {
    return this.getParamValue<number>('fileTotalParts')
  }

  get bytes(): Buffer {
    return this.getParamValue<Buffer>('bytes')
  }
}
