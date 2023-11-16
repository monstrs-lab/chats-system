import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatlistsExportedChatlistInviteValues {
  filter: any
  invite: any
}

export class ChatlistsExportedChatlistInvite extends TLConstructor<ChatlistsExportedChatlistInviteValues> {
  static override CONSTRUCTOR_ID: number = 283567014
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'filter',
      type: 'DialogFilter',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invite',
      type: 'ExportedChatlistInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get filter(): any {
    return this.getParamValue<any>('filter')
  }

  get invite(): any {
    return this.getParamValue<any>('invite')
  }
}
