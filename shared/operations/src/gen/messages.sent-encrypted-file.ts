import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesSentEncryptedFileValues {
  date: number
  file: any
}

export class MessagesSentEncryptedFile extends TLConstructor<MessagesSentEncryptedFileValues> {
  static override CONSTRUCTOR_ID: number = -1802240206
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'date',
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
      name: 'file',
      type: 'EncryptedFile',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }
}
