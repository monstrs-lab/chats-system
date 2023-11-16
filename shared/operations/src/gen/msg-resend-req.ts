import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgResendReqValues {
  msgIds: Array<bigint>
}

export class MsgResendReq extends TLConstructor<MsgResendReqValues> {
  static override CONSTRUCTOR_ID: number = 2105940488
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'msg_ids',
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

  get msgIds(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('msgIds')
  }
}
