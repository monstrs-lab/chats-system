import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsInviteToChannelValues {
  channel: any
  users: Array<any>
}

export class ChannelsInviteToChannel extends TLMethod<ChannelsInviteToChannelValues> {
  static override CONSTRUCTOR_ID = 429865580
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel',
      type: 'InputChannel',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'users',
      type: 'InputUser',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
