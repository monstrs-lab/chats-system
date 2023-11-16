import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmailVerificationCodeValues {
  code: string
}

export class EmailVerificationCode extends TLConstructor<EmailVerificationCodeValues> {
  static override CONSTRUCTOR_ID: number = -1842457175
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'code',
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

  get code(): string {
    return this.getParamValue<string>('code')
  }
}
