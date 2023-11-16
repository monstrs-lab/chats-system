import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChannelCreateValues {
  title: string
}

export class MessageActionChannelCreate extends TLConstructor<MessageActionChannelCreateValues> {
  static override CONSTRUCTOR_ID: number = -1781355374
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'title',
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

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
