import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockCoverValues {
  cover: any
}

export class PageBlockCover extends TLConstructor<PageBlockCoverValues> {
  static override CONSTRUCTOR_ID: number = 972174080
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'cover',
      type: 'PageBlock',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get cover(): any {
    return this.getParamValue<any>('cover')
  }
}
