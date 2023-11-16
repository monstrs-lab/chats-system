import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChatParticipantValues {
  flags: any
  chatId: bigint
  date: number
  actorId: bigint
  userId: bigint
  prevParticipant: any
  newParticipant: any
  invite: any
  qts: number
}

export class UpdateChatParticipant extends TLConstructor<UpdateChatParticipantValues> {
  static override CONSTRUCTOR_ID: number = -796432838
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
      name: 'chat_id',
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
      name: 'actor_id',
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
      name: 'prev_participant',
      type: 'ChatParticipant',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_participant',
      type: 'ChatParticipant',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'qts',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get actorId(): bigint {
    return this.getParamValue<bigint>('actorId')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get prevParticipant(): any {
    return this.getParamValue<any>('prevParticipant')
  }

  get newParticipant(): any {
    return this.getParamValue<any>('newParticipant')
  }

  get invite(): any {
    return this.getParamValue<any>('invite')
  }

  get qts(): number {
    return this.getParamValue<number>('qts')
  }
}
