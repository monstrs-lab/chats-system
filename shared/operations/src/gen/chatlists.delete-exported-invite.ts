import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChatlistsDeleteExportedInviteValues {
  chatlist: any
  slug: string
}

export class ChatlistsDeleteExportedInvite extends TLMethod<ChatlistsDeleteExportedInviteValues> {
  static override CONSTRUCTOR_ID = 1906072670
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
      name: 'slug',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get chatlist(): any {
    return this.getParamValue<any>('chatlist')
  }

  get slug(): string {
    return this.getParamValue<string>('slug')
  }
}
