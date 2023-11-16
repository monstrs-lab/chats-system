import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesReadMessageContentsValues {
  id: Array<number>
}

export class MessagesReadMessageContents extends TLMethod<MessagesReadMessageContentsValues> {
  static override CONSTRUCTOR_ID = 916930423
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }
}
