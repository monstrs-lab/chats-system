import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelParticipantBannedValues {
  flags: any
  left: boolean
  peer: any
  kickedBy: bigint
  date: number
  bannedRights: any
}

export class ChannelParticipantBanned extends TLConstructor<ChannelParticipantBannedValues> {
  static override CONSTRUCTOR_ID: number = 1844969806
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
      name: 'left',
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
      name: 'peer',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'kicked_by',
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
      name: 'date',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'banned_rights',
      type: 'ChatBannedRights',
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

  get left(): boolean {
    return this.getParamValue<boolean>('left')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get kickedBy(): bigint {
    return this.getParamValue<bigint>('kickedBy')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get bannedRights(): any {
    return this.getParamValue<any>('bannedRights')
  }
}
