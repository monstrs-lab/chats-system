import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthSentCodeTypeFlashCallValues {
  pattern: string
}

export class AuthSentCodeTypeFlashCall extends TLConstructor<AuthSentCodeTypeFlashCallValues> {
  static override CONSTRUCTOR_ID: number = -1425815847
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'pattern',
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

  get pattern(): string {
    return this.getParamValue<string>('pattern')
  }
}
