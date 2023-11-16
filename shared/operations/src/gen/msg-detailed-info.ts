import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgDetailedInfoValues {
  msgId: bigint
  answerMsgId: bigint
  bytes: number
  status: number
}

export class MsgDetailedInfo extends TLConstructor<MsgDetailedInfoValues> {
  static override CONSTRUCTOR_ID: number = 661470918
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'msg_id',
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
      name: 'answer_msg_id',
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
      name: 'bytes',
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
      name: 'status',
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

  get msgId(): bigint {
    return this.getParamValue<bigint>('msgId')
  }

  get answerMsgId(): bigint {
    return this.getParamValue<bigint>('answerMsgId')
  }

  get bytes(): number {
    return this.getParamValue<number>('bytes')
  }

  get status(): number {
    return this.getParamValue<number>('status')
  }
}
