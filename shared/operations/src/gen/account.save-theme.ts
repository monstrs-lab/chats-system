import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSaveThemeValues {
  theme: any
  unsave: any
}

export class AccountSaveTheme extends TLMethod<AccountSaveThemeValues> {
  static override CONSTRUCTOR_ID = -229175188
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'unsave',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get theme(): any {
    return this.getParamValue<any>('theme')
  }

  get unsave(): any {
    return this.getParamValue<any>('unsave')
  }
}
