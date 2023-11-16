import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChatParticipantAddValues {
  chatId: bigint
  userId: bigint
  inviterId: bigint
  date: number
  version: number
}

export class UpdateChatParticipantAdd extends TLConstructor<UpdateChatParticipantAddValues> {
  static override CONSTRUCTOR_ID: number = 1037718609
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'version',
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

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get inviterId(): bigint {
    return this.getParamValue<bigint>('inviterId')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }
}
