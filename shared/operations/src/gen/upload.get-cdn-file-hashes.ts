import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UploadGetCdnFileHashesValues {
  fileToken: Buffer
  offset: bigint
}

export class UploadGetCdnFileHashes extends TLMethod<UploadGetCdnFileHashesValues> {
  static override CONSTRUCTOR_ID = -1847836879
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
  ]

  get fileToken(): Buffer {
    return this.getParamValue<Buffer>('fileToken')
  }

  get offset(): bigint {
    return this.getParamValue<bigint>('offset')
  }
}
