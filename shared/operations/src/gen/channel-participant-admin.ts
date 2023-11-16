import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelParticipantAdminValues {
  flags: any
  canEdit: boolean
  self: boolean
  userId: bigint
  inviterId: bigint
  promotedBy: bigint
  date: number
  adminRights: any
  rank: string
}

export class ChannelParticipantAdmin extends TLConstructor<ChannelParticipantAdminValues> {
  static override CONSTRUCTOR_ID: number = 885242707
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
      name: 'can_edit',
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
      name: 'self',
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
      name: 'user_id',
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
      name: 'inviter_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'promoted_by',
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
      name: 'admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'rank',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get canEdit(): boolean {
    return this.getParamValue<boolean>('canEdit')
  }

  get self(): boolean {
    return this.getParamValue<boolean>('self')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get inviterId(): bigint {
    return this.getParamValue<bigint>('inviterId')
  }

  get promotedBy(): bigint {
    return this.getParamValue<bigint>('promotedBy')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get adminRights(): any {
    return this.getParamValue<any>('adminRights')
  }

  get rank(): string {
    return this.getParamValue<string>('rank')
  }
}
