import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateEncryptionValues {
  chat: any
  date: number
}

export class UpdateEncryption extends TLConstructor<UpdateEncryptionValues> {
  static override CONSTRUCTOR_ID: number = -1264392051
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chat',
      type: 'EncryptedChat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
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
  ]

  get chat(): any {
    return this.getParamValue<any>('chat')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }
}