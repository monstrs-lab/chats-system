import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthLoginTokenSuccessValues {
  authorization: any
}

export class AuthLoginTokenSuccess extends TLConstructor<AuthLoginTokenSuccessValues> {
  static override CONSTRUCTOR_ID: number = 957176926
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'authorization',
      type: 'auth.Authorization',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get authorization(): any {
    return this.getParamValue<any>('authorization')
  }
}
