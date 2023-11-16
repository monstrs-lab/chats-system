import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthAcceptLoginTokenValues {
  token: Buffer
}

export class AuthAcceptLoginToken extends TLMethod<AuthAcceptLoginTokenValues> {
  static override CONSTRUCTOR_ID = -392909491
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get token(): Buffer {
    return this.getParamValue<Buffer>('token')
  }
}
