import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgCopyValues {
  origMessage: any
}

export class MsgCopy extends TLConstructor<MsgCopyValues> {
  static override CONSTRUCTOR_ID: number = -530561358
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'orig_message',
      type: 'Message',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get origMessage(): any {
    return this.getParamValue<any>('origMessage')
  }
}
