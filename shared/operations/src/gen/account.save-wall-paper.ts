import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSaveWallPaperValues {
  wallpaper: any
  unsave: any
  settings: any
}

export class AccountSaveWallPaper extends TLMethod<AccountSaveWallPaperValues> {
  static override CONSTRUCTOR_ID = 1817860919
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'wallpaper',
      type: 'InputWallPaper',
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
    {
      name: 'settings',
      type: 'WallPaperSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get wallpaper(): any {
    return this.getParamValue<any>('wallpaper')
  }

  get unsave(): any {
    return this.getParamValue<any>('unsave')
  }

  get settings(): any {
    return this.getParamValue<any>('settings')
  }
}
