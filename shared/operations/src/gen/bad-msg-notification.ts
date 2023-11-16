import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BadMsgNotificationValues {
  badMsgId: bigint
  badMsgSeqno: number
  errorCode: number
}

export class BadMsgNotification extends TLConstructor<BadMsgNotificationValues> {
  static override CONSTRUCTOR_ID: number = -1477445615
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'bad_msg_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bad_msg_seqno',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'error_code',
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

  get badMsgId(): bigint {
    return this.getParamValue<bigint>('badMsgId')
  }

  get badMsgSeqno(): number {
    return this.getParamValue<number>('badMsgSeqno')
  }

  get errorCode(): number {
    return this.getParamValue<number>('errorCode')
  }
}
