import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesSentEncryptedMessageValues {
  date: number
}

export class MessagesSentEncryptedMessage extends TLConstructor<MessagesSentEncryptedMessageValues> {
  static override CONSTRUCTOR_ID: number = 1443858741
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'date',
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

  get date(): number {
    return this.getParamValue<number>('date')
  }
}
