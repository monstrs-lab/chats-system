import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesRequestEncryptionValues {
  userId: any
  randomId: number
  gA: Buffer
}

export class MessagesRequestEncryption extends TLMethod<MessagesRequestEncryptionValues> {
  static override CONSTRUCTOR_ID = -162681021
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
      type: 'InputUser',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'random_id',
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
      name: 'g_a',
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

  get userId(): any {
    return this.getParamValue<any>('userId')
  }

  get randomId(): number {
    return this.getParamValue<number>('randomId')
  }

  get gA(): Buffer {
    return this.getParamValue<Buffer>('gA')
  }
}
