import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhoneGroupCallValues {
  call: any
  participants: Array<any>
  participantsNextOffset: string
  chats: Array<any>
  users: Array<any>
}

export class PhoneGroupCall extends TLConstructor<PhoneGroupCallValues> {
  static override CONSTRUCTOR_ID: number = -1636664659
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'call',
      type: 'GroupCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'participants',
      type: 'GroupCallParticipant',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'participants_next_offset',
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
      name: 'chats',
      type: 'Chat',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get participants(): Array<any> {
    return this.getParamValue<Array<any>>('participants')
  }

  get participantsNextOffset(): string {
    return this.getParamValue<string>('participantsNextOffset')
  }

  get chats(): Array<any> {
    return this.getParamValue<Array<any>>('chats')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
