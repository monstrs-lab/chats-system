import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsJoinChatlistInviteValues {
  slug: string
  peers: Array<any>
}

export class ChatlistsJoinChatlistInvite extends TLMethod<ChatlistsJoinChatlistInviteValues> {
  static override CONSTRUCTOR_ID = -1498291302
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'slug',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peers',
      type: 'InputPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get slug(): string {
    return this.getParamValue<string>('slug')
  }

  get peers(): Array<any> {
    return this.getParamValue<Array<any>>('peers')
  }
}
