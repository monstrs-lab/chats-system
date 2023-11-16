import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatAdminWithInvitesValues {
  adminId: bigint
  invitesCount: number
  revokedInvitesCount: number
}

export class ChatAdminWithInvites extends TLConstructor<ChatAdminWithInvitesValues> {
  static override CONSTRUCTOR_ID: number = -219353309
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'admin_id',
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
      name: 'invites_count',
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
      name: 'revoked_invites_count',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get adminId(): bigint {
    return this.getParamValue<bigint>('adminId')
  }

  get invitesCount(): number {
    return this.getParamValue<number>('invitesCount')
  }

  get revokedInvitesCount(): number {
    return this.getParamValue<number>('revokedInvitesCount')
  }
}