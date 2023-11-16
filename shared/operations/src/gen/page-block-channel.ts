import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockChannelValues {
  channel: any
}

export class PageBlockChannel extends TLConstructor<PageBlockChannelValues> {
  static override CONSTRUCTOR_ID: number = -283684427
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel',
      type: 'Chat',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get channel(): any {
    return this.getParamValue<any>('channel')
  }
}
