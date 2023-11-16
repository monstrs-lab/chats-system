import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountSentEmailCodeValues {
  emailPattern: string
  length: number
}

export class AccountSentEmailCode extends TLConstructor<AccountSentEmailCodeValues> {
  static override CONSTRUCTOR_ID: number = -2128640689
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
    {
      name: 'length',
      type: 'int',
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

  get length(): number {
    return this.getParamValue<number>('length')
  }
}
