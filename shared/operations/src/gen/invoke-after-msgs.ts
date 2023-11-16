import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface InvokeAfterMsgsValues {
  msgIds: Array<bigint>
  query: any
}

export class InvokeAfterMsgs extends TLMethod<InvokeAfterMsgsValues> {
  static override CONSTRUCTOR_ID = 1036301552
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

  get msgIds(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('msgIds')
  }

  get query(): any {
    return this.getParamValue<any>('query')
  }
}
