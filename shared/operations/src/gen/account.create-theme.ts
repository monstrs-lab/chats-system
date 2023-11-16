import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountCreateThemeValues {
  flags: any
  slug: string
  title: string
  document: any
  settings: Array<any>
}

export class AccountCreateTheme extends TLMethod<AccountCreateThemeValues> {
  static override CONSTRUCTOR_ID = 1697530880
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
      name: 'slug',
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
      name: 'title',
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
      name: 'document',
      type: 'InputDocument',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'settings',
      type: 'InputThemeSettings',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get slug(): string {
    return this.getParamValue<string>('slug')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get document(): any {
    return this.getParamValue<any>('document')
  }

  get settings(): Array<any> {
    return this.getParamValue<Array<any>>('settings')
  }
}
