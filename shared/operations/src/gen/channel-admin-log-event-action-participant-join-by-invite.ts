import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionParticipantJoinByInviteValues {
  flags: any
  viaChatlist: boolean
  invite: any
}

export class ChannelAdminLogEventActionParticipantJoinByInvite extends TLConstructor<ChannelAdminLogEventActionParticipantJoinByInviteValues> {
  static override CONSTRUCTOR_ID: number = -23084712
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
      name: 'via_chatlist',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get viaChatlist(): boolean {
    return this.getParamValue<boolean>('viaChatlist')
  }

  get invite(): any {
    return this.getParamValue<any>('invite')
  }
}
