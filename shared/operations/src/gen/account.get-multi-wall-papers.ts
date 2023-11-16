import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetMultiWallPapersValues {
  wallpapers: Array<any>
}

export class AccountGetMultiWallPapers extends TLMethod<AccountGetMultiWallPapersValues> {
  static override CONSTRUCTOR_ID = 1705865692
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'wallpapers',
      type: 'InputWallPaper',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get wallpapers(): Array<any> {
    return this.getParamValue<Array<any>>('wallpapers')
  }
}
