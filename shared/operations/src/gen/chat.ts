import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatValues {
  flags: any
  creator: boolean
  left: boolean
  deactivated: boolean
  callActive: boolean
  callNotEmpty: boolean
  noforwards: boolean
  id: bigint
  title: string
  photo: any
  participantsCount: number
  date: number
  version: number
  migratedTo: any
  adminRights: any
  defaultBannedRights: any
}

export class Chat extends TLConstructor<ChatValues> {
  static override CONSTRUCTOR_ID: number = 1103884886
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
      name: 'deactivated',
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
      name: 'noforwards',
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
    {
      name: 'migrated_to',
      type: 'InputChannel',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
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

  get deactivated(): boolean {
    return this.getParamValue<boolean>('deactivated')
  }

  get callActive(): boolean {
    return this.getParamValue<boolean>('callActive')
  }

  get callNotEmpty(): boolean {
    return this.getParamValue<boolean>('callNotEmpty')
  }

  get noforwards(): boolean {
    return this.getParamValue<boolean>('noforwards')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }

  get participantsCount(): number {
    return this.getParamValue<number>('participantsCount')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }

  get migratedTo(): any {
    return this.getParamValue<any>('migratedTo')
  }

  get adminRights(): any {
    return this.getParamValue<any>('adminRights')
  }

  get defaultBannedRights(): any {
    return this.getParamValue<any>('defaultBannedRights')
  }
}
