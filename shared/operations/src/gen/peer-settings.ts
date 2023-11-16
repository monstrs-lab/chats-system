import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PeerSettingsValues {
  flags: any
  reportSpam: boolean
  addContact: boolean
  blockContact: boolean
  shareContact: boolean
  needContactsException: boolean
  reportGeo: boolean
  autoarchived: boolean
  inviteMembers: boolean
  requestChatBroadcast: boolean
  geoDistance: number
  requestChatTitle: string
  requestChatDate: number
}

export class PeerSettings extends TLConstructor<PeerSettingsValues> {
  static override CONSTRUCTOR_ID: number = -1525149427
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
      name: 'report_spam',
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
      name: 'add_contact',
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
      name: 'block_contact',
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
      name: 'share_contact',
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
      name: 'need_contacts_exception',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'report_geo',
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
      name: 'autoarchived',
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
      name: 'invite_members',
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
      name: 'request_chat_broadcast',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'geo_distance',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'request_chat_title',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'request_chat_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get reportSpam(): boolean {
    return this.getParamValue<boolean>('reportSpam')
  }

  get addContact(): boolean {
    return this.getParamValue<boolean>('addContact')
  }

  get blockContact(): boolean {
    return this.getParamValue<boolean>('blockContact')
  }

  get shareContact(): boolean {
    return this.getParamValue<boolean>('shareContact')
  }

  get needContactsException(): boolean {
    return this.getParamValue<boolean>('needContactsException')
  }

  get reportGeo(): boolean {
    return this.getParamValue<boolean>('reportGeo')
  }

  get autoarchived(): boolean {
    return this.getParamValue<boolean>('autoarchived')
  }

  get inviteMembers(): boolean {
    return this.getParamValue<boolean>('inviteMembers')
  }

  get requestChatBroadcast(): boolean {
    return this.getParamValue<boolean>('requestChatBroadcast')
  }

  get geoDistance(): number {
    return this.getParamValue<number>('geoDistance')
  }

  get requestChatTitle(): string {
    return this.getParamValue<string>('requestChatTitle')
  }

  get requestChatDate(): number {
    return this.getParamValue<number>('requestChatDate')
  }
}
