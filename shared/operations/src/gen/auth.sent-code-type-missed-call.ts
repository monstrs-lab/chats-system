import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthSentCodeTypeMissedCallValues {
  prefix: string
  length: number
}

export class AuthSentCodeTypeMissedCall extends TLConstructor<AuthSentCodeTypeMissedCallValues> {
  static override CONSTRUCTOR_ID: number = -2113903484
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prefix',
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

  get prefix(): string {
    return this.getParamValue<string>('prefix')
  }

  get length(): number {
    return this.getParamValue<number>('length')
  }
}
