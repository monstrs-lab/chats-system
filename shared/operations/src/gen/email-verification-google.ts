import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmailVerificationGoogleValues {
  token: string
}

export class EmailVerificationGoogle extends TLConstructor<EmailVerificationGoogleValues> {
  static override CONSTRUCTOR_ID: number = -611279166
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
