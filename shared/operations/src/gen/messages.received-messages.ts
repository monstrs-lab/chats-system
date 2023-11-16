import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesReceivedMessagesValues {
  maxId: number
}

export class MessagesReceivedMessages extends TLMethod<MessagesReceivedMessagesValues> {
  static override CONSTRUCTOR_ID = 94983360
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'max_id',
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

  get maxId(): number {
    return this.getParamValue<number>('maxId')
  }
}
