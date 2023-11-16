import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetChatsValues {
  id: Array<bigint>
}

export class MessagesGetChats extends TLMethod<MessagesGetChatsValues> {
  static override CONSTRUCTOR_ID = 1240027791
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get id(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('id')
  }
}
