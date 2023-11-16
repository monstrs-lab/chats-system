import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512Iter100000SHA256ModPowValues {
  salt1: Buffer
  salt2: Buffer
  g: number
  p: Buffer
}

export class PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512Iter100000SHA256ModPow extends TLConstructor<PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512Iter100000SHA256ModPowValues> {
  static override CONSTRUCTOR_ID: number = 982592842
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'salt1',
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
      name: 'salt2',
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
      name: 'g',
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
      name: 'p',
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

  get salt1(): Buffer {
    return this.getParamValue<Buffer>('salt1')
  }

  get salt2(): Buffer {
    return this.getParamValue<Buffer>('salt2')
  }

  get g(): number {
    return this.getParamValue<number>('g')
  }

  get p(): Buffer {
    return this.getParamValue<Buffer>('p')
  }
}
