import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UploadGetCdnFileValues {
  fileToken: Buffer
  offset: bigint
  limit: number
}

export class UploadGetCdnFile extends TLMethod<UploadGetCdnFileValues> {
  static override CONSTRUCTOR_ID = 962554330
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'file_token',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'offset',
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

  get fileToken(): Buffer {
    return this.getParamValue<Buffer>('fileToken')
  }

  get offset(): bigint {
    return this.getParamValue<bigint>('offset')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }
}
