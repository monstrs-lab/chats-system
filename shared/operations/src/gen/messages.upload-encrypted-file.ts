import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesUploadEncryptedFileValues {
  peer: any
  file: any
}

export class MessagesUploadEncryptedFile extends TLMethod<MessagesUploadEncryptedFileValues> {
  static override CONSTRUCTOR_ID = 1347929239
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputEncryptedChat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'file',
      type: 'InputEncryptedFile',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }
}
