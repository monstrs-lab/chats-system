import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetDocumentByHashValues {
  sha256: Buffer
  size: bigint
  mimeType: string
}

export class MessagesGetDocumentByHash extends TLMethod<MessagesGetDocumentByHashValues> {
  static override CONSTRUCTOR_ID = -1309538785
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'sha256',
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
      name: 'size',
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
  ]

  get sha256(): Buffer {
    return this.getParamValue<Buffer>('sha256')
  }

  get size(): bigint {
    return this.getParamValue<bigint>('size')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }
}
