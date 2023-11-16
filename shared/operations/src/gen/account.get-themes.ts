import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetThemesValues {
  format: string
  hash: bigint
}

export class AccountGetThemes extends TLMethod<AccountGetThemesValues> {
  static override CONSTRUCTOR_ID = 1913054296
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'format',
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
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get format(): string {
    return this.getParamValue<string>('format')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
