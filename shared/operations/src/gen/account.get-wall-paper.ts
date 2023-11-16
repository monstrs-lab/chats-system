import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetWallPaperValues {
  wallpaper: any
}

export class AccountGetWallPaper extends TLMethod<AccountGetWallPaperValues> {
  static override CONSTRUCTOR_ID = -57811990
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
  ]

  get wallpaper(): any {
    return this.getParamValue<any>('wallpaper')
  }
}
