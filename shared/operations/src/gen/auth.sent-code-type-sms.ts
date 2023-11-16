import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthSentCodeTypeSmsValues {
  length: number
}

export class AuthSentCodeTypeSms extends TLConstructor<AuthSentCodeTypeSmsValues> {
  static override CONSTRUCTOR_ID: number = -1073693790
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get length(): number {
    return this.getParamValue<number>('length')
  }
}
