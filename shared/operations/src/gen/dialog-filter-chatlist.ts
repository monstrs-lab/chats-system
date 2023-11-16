import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogFilterChatlistValues {
  flags: any
  hasMyInvites: boolean
  id: number
  title: string
  emoticon: string
  pinnedPeers: Array<any>
  includePeers: Array<any>
}

export class DialogFilterChatlist extends TLConstructor<DialogFilterChatlistValues> {
  static override CONSTRUCTOR_ID: number = -699792216
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
      name: 'has_my_invites',
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
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get hasMyInvites(): boolean {
    return this.getParamValue<boolean>('hasMyInvites')
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
}
