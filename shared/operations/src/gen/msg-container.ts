import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MsgContainerValues {
  messages: Array<any>
}

export class MsgContainer extends TLConstructor<MsgContainerValues> {
  static override CONSTRUCTOR_ID: number = 1945237724
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'messages',
      type: 'Message',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get messages(): Array<any> {
    return this.getParamValue<Array<any>>('messages')
  }
}
