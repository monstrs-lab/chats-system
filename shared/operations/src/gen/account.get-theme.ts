import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetThemeValues {
  format: string
  theme: any
}

export class AccountGetTheme extends TLMethod<AccountGetThemeValues> {
  static override CONSTRUCTOR_ID = 978872812
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
      name: 'theme',
      type: 'InputTheme',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get format(): string {
    return this.getParamValue<string>('format')
  }

  get theme(): any {
    return this.getParamValue<any>('theme')
  }
}
