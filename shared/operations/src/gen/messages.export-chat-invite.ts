import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesExportChatInviteValues {
  flags: any
  legacyRevokePermanent: boolean
  requestNeeded: boolean
  peer: any
  expireDate: number
  usageLimit: number
  title: string
}

export class MessagesExportChatInvite extends TLMethod<MessagesExportChatInviteValues> {
  static override CONSTRUCTOR_ID = -1607670315
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
      name: 'legacy_revoke_permanent',
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
      name: 'request_needed',
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
      name: 'peer',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'expire_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'usage_limit',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get legacyRevokePermanent(): boolean {
    return this.getParamValue<boolean>('legacyRevokePermanent')
  }

  get requestNeeded(): boolean {
    return this.getParamValue<boolean>('requestNeeded')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get expireDate(): number {
    return this.getParamValue<number>('expireDate')
  }

  get usageLimit(): number {
    return this.getParamValue<number>('usageLimit')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
