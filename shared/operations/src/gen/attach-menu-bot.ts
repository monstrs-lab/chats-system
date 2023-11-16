import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuBotValues {
  flags: any
  inactive: boolean
  hasSettings: boolean
  requestWriteAccess: boolean
  botId: bigint
  shortName: string
  peerTypes: Array<any>
  icons: Array<any>
}

export class AttachMenuBot extends TLConstructor<AttachMenuBotValues> {
  static override CONSTRUCTOR_ID: number = -928371502
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
      name: 'inactive',
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
      name: 'has_settings',
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
      name: 'request_write_access',
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
      name: 'bot_id',
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
      name: 'short_name',
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
      name: 'peer_types',
      type: 'AttachMenuPeerType',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'icons',
      type: 'AttachMenuBotIcon',
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

  get inactive(): boolean {
    return this.getParamValue<boolean>('inactive')
  }

  get hasSettings(): boolean {
    return this.getParamValue<boolean>('hasSettings')
  }

  get requestWriteAccess(): boolean {
    return this.getParamValue<boolean>('requestWriteAccess')
  }

  get botId(): bigint {
    return this.getParamValue<bigint>('botId')
  }

  get shortName(): string {
    return this.getParamValue<string>('shortName')
  }

  get peerTypes(): Array<any> {
    return this.getParamValue<Array<any>>('peerTypes')
  }

  get icons(): Array<any> {
    return this.getParamValue<Array<any>>('icons')
  }
}
