import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageListItemBlocksValues {
  blocks: Array<any>
}

export class PageListItemBlocks extends TLConstructor<PageListItemBlocksValues> {
  static override CONSTRUCTOR_ID: number = 635466748
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'blocks',
      type: 'PageBlock',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get blocks(): Array<any> {
    return this.getParamValue<Array<any>>('blocks')
  }
}
