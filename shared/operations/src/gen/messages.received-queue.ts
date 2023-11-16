import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesReceivedQueueValues {
  maxQts: number
}

export class MessagesReceivedQueue extends TLMethod<MessagesReceivedQueueValues> {
  static override CONSTRUCTOR_ID = 1436924774
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'max_qts',
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

  get maxQts(): number {
    return this.getParamValue<number>('maxQts')
  }
}
