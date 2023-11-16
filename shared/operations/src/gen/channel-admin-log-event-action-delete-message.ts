import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionDeleteMessageValues {
  message: any
}

export class ChannelAdminLogEventActionDeleteMessage extends TLConstructor<ChannelAdminLogEventActionDeleteMessageValues> {
  static override CONSTRUCTOR_ID: number = 1121994683
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'message',
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

  get message(): any {
    return this.getParamValue<any>('message')
  }
}
