import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountInstallWallPaperValues {
  wallpaper: any
  settings: any
}

export class AccountInstallWallPaper extends TLMethod<AccountInstallWallPaperValues> {
  static override CONSTRUCTOR_ID = -18000023
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

  get settings(): any {
    return this.getParamValue<any>('settings')
  }
}
