import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatInviteValues {
  flags: any
  channel: boolean
  broadcast: boolean
  public: boolean
  megagroup: boolean
  requestNeeded: boolean
  verified: boolean
  scam: boolean
  fake: boolean
  title: string
  about: string
  photo: any
  participantsCount: number
  participants: Array<any>
}

export class ChatInvite extends TLConstructor<ChatInviteValues> {
  static override CONSTRUCTOR_ID: number = 806110401
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
      name: 'channel',
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
      name: 'broadcast',
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
      name: 'public',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'megagroup',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'request_needed',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'verified',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'scam',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'fake',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
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
      name: 'about',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'photo',
      type: 'Photo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'participants_count',
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
      name: 'participants',
      type: 'User',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get channel(): boolean {
    return this.getParamValue<boolean>('channel')
  }

  get broadcast(): boolean {
    return this.getParamValue<boolean>('broadcast')
  }

  get public(): boolean {
    return this.getParamValue<boolean>('public')
  }

  get megagroup(): boolean {
    return this.getParamValue<boolean>('megagroup')
  }

  get requestNeeded(): boolean {
    return this.getParamValue<boolean>('requestNeeded')
  }

  get verified(): boolean {
    return this.getParamValue<boolean>('verified')
  }

  get scam(): boolean {
    return this.getParamValue<boolean>('scam')
  }

  get fake(): boolean {
    return this.getParamValue<boolean>('fake')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get about(): string {
    return this.getParamValue<string>('about')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get participantsCount(): number {
    return this.getParamValue<number>('participantsCount')
  }

  get participants(): Array<any> {
    return this.getParamValue<Array<any>>('participants')
  }
}
