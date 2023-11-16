import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesDialogsNotModifiedValues {
  count: number
}

export class MessagesDialogsNotModified extends TLConstructor<MessagesDialogsNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = -253500010
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'count',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get count(): number {
    return this.getParamValue<number>('count')
  }
}
