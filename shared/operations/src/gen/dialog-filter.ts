import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogFilterValues {
  flags: any
  contacts: boolean
  nonContacts: boolean
  groups: boolean
  broadcasts: boolean
  bots: boolean
  excludeMuted: boolean
  excludeRead: boolean
  excludeArchived: boolean
  id: number
  title: string
  emoticon: string
  pinnedPeers: Array<any>
  includePeers: Array<any>
  excludePeers: Array<any>
}

export class DialogFilter extends TLConstructor<DialogFilterValues> {
  static override CONSTRUCTOR_ID: number = 1949890536
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
      name: 'contacts',
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
      name: 'non_contacts',
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
      name: 'groups',
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
      name: 'broadcasts',
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
      name: 'bots',
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
      name: 'exclude_muted',
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
      name: 'exclude_read',
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
      name: 'exclude_archived',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
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
      name: 'emoticon',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pinned_peers',
      type: 'InputPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'include_peers',
      type: 'InputPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'exclude_peers',
      type: 'InputPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get contacts(): boolean {
    return this.getParamValue<boolean>('contacts')
  }

  get nonContacts(): boolean {
    return this.getParamValue<boolean>('nonContacts')
  }

  get groups(): boolean {
    return this.getParamValue<boolean>('groups')
  }

  get broadcasts(): boolean {
    return this.getParamValue<boolean>('broadcasts')
  }

  get bots(): boolean {
    return this.getParamValue<boolean>('bots')
  }

  get excludeMuted(): boolean {
    return this.getParamValue<boolean>('excludeMuted')
  }

  get excludeRead(): boolean {
    return this.getParamValue<boolean>('excludeRead')
  }

  get excludeArchived(): boolean {
    return this.getParamValue<boolean>('excludeArchived')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get emoticon(): string {
    return this.getParamValue<string>('emoticon')
  }

  get pinnedPeers(): Array<any> {
    return this.getParamValue<Array<any>>('pinnedPeers')
  }

  get includePeers(): Array<any> {
    return this.getParamValue<Array<any>>('includePeers')
  }

  get excludePeers(): Array<any> {
    return this.getParamValue<Array<any>>('excludePeers')
  }
}
