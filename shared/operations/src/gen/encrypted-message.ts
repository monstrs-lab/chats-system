import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EncryptedMessageValues {
  randomId: bigint
  chatId: number
  date: number
  bytes: Buffer
  file: any
}

export class EncryptedMessage extends TLConstructor<EncryptedMessageValues> {
  static override CONSTRUCTOR_ID: number = -317144808
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'random_id',
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
      name: 'chat_id',
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
      name: 'bytes',
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

  get randomId(): bigint {
    return this.getParamValue<bigint>('randomId')
  }

  get chatId(): number {
    return this.getParamValue<number>('chatId')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get bytes(): Buffer {
    return this.getParamValue<Buffer>('bytes')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }
}
