import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeAfterMsgValues {
  msgId: bigint
  query: any
}

export class InvokeAfterMsg extends TLMethod<InvokeAfterMsgValues> {
  static override CONSTRUCTOR_ID = -878758099
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
      name: 'query',
      type: 'X',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get msgId(): bigint {
    return this.getParamValue<bigint>('msgId')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
