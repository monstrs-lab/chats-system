import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SponsoredMessageValues {
  flags: any
  recommended: boolean
  showPeerPhoto: boolean
  randomId: Buffer
  fromId: any
  chatInvite: any
  chatInviteHash: string
  channelPost: number
  startParam: string
  message: string
  entities: Array<any>
  sponsorInfo: string
  additionalInfo: string
}

export class SponsoredMessage extends TLConstructor<SponsoredMessageValues> {
  static override CONSTRUCTOR_ID: number = -64636888
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
      name: 'recommended',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'show_peer_photo',
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
      name: 'random_id',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'from_id',
      type: 'Peer',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'chat_invite',
      type: 'ChatInvite',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'chat_invite_hash',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'channel_post',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'start_param',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'message',
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
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'sponsor_info',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'additional_info',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get recommended(): boolean {
    return this.getParamValue<boolean>('recommended')
  }

  get showPeerPhoto(): boolean {
    return this.getParamValue<boolean>('showPeerPhoto')
  }

  get randomId(): Buffer {
    return this.getParamValue<Buffer>('randomId')
  }

  get fromId(): any {
    return this.getParamValue<any>('fromId')
  }

  get chatInvite(): any {
    return this.getParamValue<any>('chatInvite')
  }

  get chatInviteHash(): string {
    return this.getParamValue<string>('chatInviteHash')
  }

  get channelPost(): number {
    return this.getParamValue<number>('channelPost')
  }

  get startParam(): string {
    return this.getParamValue<string>('startParam')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get sponsorInfo(): string {
    return this.getParamValue<string>('sponsorInfo')
  }

  get additionalInfo(): string {
    return this.getParamValue<string>('additionalInfo')
  }
}
