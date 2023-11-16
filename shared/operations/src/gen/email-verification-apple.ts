import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmailVerificationAppleValues {
  token: string
}

export class EmailVerificationApple extends TLConstructor<EmailVerificationAppleValues> {
  static override CONSTRUCTOR_ID: number = -1764723459
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'token',
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

  get token(): string {
    return this.getParamValue<string>('token')
  }
}
