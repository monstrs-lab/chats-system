import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelValues {
  flags: any
  creator: boolean
  left: boolean
  broadcast: boolean
  verified: boolean
  megagroup: boolean
  restricted: boolean
  signatures: boolean
  min: boolean
  scam: boolean
  hasLink: boolean
  hasGeo: boolean
  slowmodeEnabled: boolean
  callActive: boolean
  callNotEmpty: boolean
  fake: boolean
  gigagroup: boolean
  noforwards: boolean
  joinToSend: boolean
  joinRequest: boolean
  forum: boolean
  flags2: any
  id: bigint
  accessHash: bigint
  title: string
  username: string
  photo: any
  date: number
  restrictionReason: Array<any>
  adminRights: any
  bannedRights: any
  defaultBannedRights: any
  participantsCount: number
  usernames: Array<any>
}

export class Channel extends TLConstructor<ChannelValues> {
  static override CONSTRUCTOR_ID: number = -2094689180
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
      name: 'creator',
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
      name: 'left',
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
      name: 'broadcast',
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
      name: 'megagroup',
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
      name: 'restricted',
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
      name: 'signatures',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'min',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
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
      flagIndex: 19,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'has_link',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 20,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'has_geo',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 21,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'slowmode_enabled',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 22,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'call_active',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 23,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'call_not_empty',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 24,
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
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'gigagroup',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 26,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'noforwards',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 27,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'join_to_send',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 28,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'join_request',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 29,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'forum',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 30,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'flags2',
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
      name: 'id',
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
      name: 'access_hash',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
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
      name: 'username',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'photo',
      type: 'ChatPhoto',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
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
      name: 'restriction_reason',
      type: 'RestrictionReason',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'admin_rights',
      type: 'ChatAdminRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'banned_rights',
      type: 'ChatBannedRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'default_banned_rights',
      type: 'ChatBannedRights',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 18,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'participants_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 17,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'usernames',
      type: 'Username',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 2,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get creator(): boolean {
    return this.getParamValue<boolean>('creator')
  }

  get left(): boolean {
    return this.getParamValue<boolean>('left')
  }

  get broadcast(): boolean {
    return this.getParamValue<boolean>('broadcast')
  }

  get verified(): boolean {
    return this.getParamValue<boolean>('verified')
  }

  get megagroup(): boolean {
    return this.getParamValue<boolean>('megagroup')
  }

  get restricted(): boolean {
    return this.getParamValue<boolean>('restricted')
  }

  get signatures(): boolean {
    return this.getParamValue<boolean>('signatures')
  }

  get min(): boolean {
    return this.getParamValue<boolean>('min')
  }

  get scam(): boolean {
    return this.getParamValue<boolean>('scam')
  }

  get hasLink(): boolean {
    return this.getParamValue<boolean>('hasLink')
  }

  get hasGeo(): boolean {
    return this.getParamValue<boolean>('hasGeo')
  }

  get slowmodeEnabled(): boolean {
    return this.getParamValue<boolean>('slowmodeEnabled')
  }

  get callActive(): boolean {
    return this.getParamValue<boolean>('callActive')
  }

  get callNotEmpty(): boolean {
    return this.getParamValue<boolean>('callNotEmpty')
  }

  get fake(): boolean {
    return this.getParamValue<boolean>('fake')
  }

  get gigagroup(): boolean {
    return this.getParamValue<boolean>('gigagroup')
  }

  get noforwards(): boolean {
    return this.getParamValue<boolean>('noforwards')
  }

  get joinToSend(): boolean {
    return this.getParamValue<boolean>('joinToSend')
  }

  get joinRequest(): boolean {
    return this.getParamValue<boolean>('joinRequest')
  }

  get forum(): boolean {
    return this.getParamValue<boolean>('forum')
  }

  get flags2(): any {
    return this.getParamValue<any>('flags2')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get username(): string {
    return this.getParamValue<string>('username')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get restrictionReason(): Array<any> {
    return this.getParamValue<Array<any>>('restrictionReason')
  }

  get adminRights(): any {
    return this.getParamValue<any>('adminRights')
  }

  get bannedRights(): any {
    return this.getParamValue<any>('bannedRights')
  }

  get defaultBannedRights(): any {
    return this.getParamValue<any>('defaultBannedRights')
  }

  get participantsCount(): number {
    return this.getParamValue<number>('participantsCount')
  }

  get usernames(): Array<any> {
    return this.getParamValue<Array<any>>('usernames')
  }
}
