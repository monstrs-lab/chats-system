import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgNewDetailedInfoValues {
  answerMsgId: bigint
  bytes: number
  status: number
}

export class MsgNewDetailedInfo extends TLConstructor<MsgNewDetailedInfoValues> {
  static override CONSTRUCTOR_ID: number = -2137147681
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
