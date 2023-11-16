import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UploadGetFileHashesValues {
  location: any
  offset: bigint
}

export class UploadGetFileHashes extends TLMethod<UploadGetFileHashesValues> {
  static override CONSTRUCTOR_ID = -1856595926
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'location',
      type: 'InputFileLocation',
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

  get location(): any {
    return this.getParamValue<any>('location')
  }

  get offset(): bigint {
    return this.getParamValue<bigint>('offset')
  }
}
