import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthPasswordRecoveryValues {
  emailPattern: string
}

export class AuthPasswordRecovery extends TLConstructor<AuthPasswordRecoveryValues> {
  static override CONSTRUCTOR_ID: number = 326715557
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'email_pattern',
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

  get emailPattern(): string {
    return this.getParamValue<string>('emailPattern')
  }
}
