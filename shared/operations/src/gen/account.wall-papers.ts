import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountWallPapersValues {
  hash: bigint
  wallpapers: Array<any>
}

export class AccountWallPapers extends TLConstructor<AccountWallPapersValues> {
  static override CONSTRUCTOR_ID: number = -842824308
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'wallpapers',
      type: 'WallPaper',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get wallpapers(): Array<any> {
    return this.getParamValue<Array<any>>('wallpapers')
  }
}
