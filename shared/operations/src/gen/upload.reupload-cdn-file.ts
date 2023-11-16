import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UploadReuploadCdnFileValues {
  fileToken: Buffer
  requestToken: Buffer
}

export class UploadReuploadCdnFile extends TLMethod<UploadReuploadCdnFileValues> {
  static override CONSTRUCTOR_ID = -1691921240
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
      name: 'request_token',
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

  get fileToken(): Buffer {
    return this.getParamValue<Buffer>('fileToken')
  }

  get requestToken(): Buffer {
    return this.getParamValue<Buffer>('requestToken')
  }
}
