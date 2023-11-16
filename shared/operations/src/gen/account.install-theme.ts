import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountInstallThemeValues {
  flags: any
  dark: boolean
  theme: any
  format: string
  baseTheme: any
}

export class AccountInstallTheme extends TLMethod<AccountInstallThemeValues> {
  static override CONSTRUCTOR_ID = -953697477
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'dark',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'theme',
      type: 'InputTheme',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'format',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'base_theme',
      type: 'BaseTheme',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get dark(): boolean {
    return this.getParamValue<boolean>('dark')
  }

  get theme(): any {
    return this.getParamValue<any>('theme')
  }

  get format(): string {
    return this.getParamValue<string>('format')
  }

  get baseTheme(): any {
    return this.getParamValue<any>('baseTheme')
  }
}
