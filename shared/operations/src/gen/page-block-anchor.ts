import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockAnchorValues {
  name: string
}

export class PageBlockAnchor extends TLConstructor<PageBlockAnchorValues> {
  static override CONSTRUCTOR_ID: number = -837994576
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'name',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get name(): string {
    return this.getParamValue<string>('name')
  }
}
