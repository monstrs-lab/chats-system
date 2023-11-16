import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionEditMessageValues {
  prevMessage: any
  newMessage: any
}

export class ChannelAdminLogEventActionEditMessage extends TLConstructor<ChannelAdminLogEventActionEditMessageValues> {
  static override CONSTRUCTOR_ID: number = 1889215493
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_message',
      type: 'Message',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_message',
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

  get prevMessage(): any {
    return this.getParamValue<any>('prevMessage')
  }

  get newMessage(): any {
    return this.getParamValue<any>('newMessage')
  }
}
