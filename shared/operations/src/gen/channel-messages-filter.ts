import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelMessagesFilterValues {
  flags: any
  excludeNewMessages: boolean
  ranges: Array<any>
}

export class ChannelMessagesFilter extends TLConstructor<ChannelMessagesFilterValues> {
  static override CONSTRUCTOR_ID: number = -847783593
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'exclude_new_messages',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'ranges',
      type: 'MessageRange',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get excludeNewMessages(): boolean {
    return this.getParamValue<boolean>('excludeNewMessages')
  }

  get ranges(): Array<any> {
    return this.getParamValue<Array<any>>('ranges')
  }
}
