import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface RpcAnswerDroppedValues {
  msgId: bigint
  seqNo: number
  bytes: number
}

export class RpcAnswerDropped extends TLConstructor<RpcAnswerDroppedValues> {
  static override CONSTRUCTOR_ID: number = -1539647305
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
      name: 'seq_no',
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
  ]

  get msgId(): bigint {
    return this.getParamValue<bigint>('msgId')
  }

  get seqNo(): number {
    return this.getParamValue<number>('seqNo')
  }

  get bytes(): number {
    return this.getParamValue<number>('bytes')
  }
}
