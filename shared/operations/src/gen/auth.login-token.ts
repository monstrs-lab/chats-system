import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthLoginTokenValues {
  expires: number
  token: Buffer
}

export class AuthLoginToken extends TLConstructor<AuthLoginTokenValues> {
  static override CONSTRUCTOR_ID: number = 1654593920
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'expires',
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
      name: 'token',
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

  get expires(): number {
    return this.getParamValue<number>('expires')
  }

  get token(): Buffer {
    return this.getParamValue<Buffer>('token')
  }
}
