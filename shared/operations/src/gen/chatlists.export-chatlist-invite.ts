import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsExportChatlistInviteValues {
  chatlist: any
  title: string
  peers: Array<any>
}

export class ChatlistsExportChatlistInvite extends TLMethod<ChatlistsExportChatlistInviteValues> {
  static override CONSTRUCTOR_ID = -2072885362
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chatlist',
      type: 'InputChatlist',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
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
      name: 'peers',
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

  get chatlist(): any {
    return this.getParamValue<any>('chatlist')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get peers(): Array<any> {
    return this.getParamValue<Array<any>>('peers')
  }
}
