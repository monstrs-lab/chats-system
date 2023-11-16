import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UploadCdnFileReuploadNeededValues {
  requestToken: Buffer
}

export class UploadCdnFileReuploadNeeded extends TLConstructor<UploadCdnFileReuploadNeededValues> {
  static override CONSTRUCTOR_ID: number = -290921362
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get requestToken(): Buffer {
    return this.getParamValue<Buffer>('requestToken')
  }
}
