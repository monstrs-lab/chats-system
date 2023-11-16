import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionExportedInviteDeleteValues {
  invite: any
}

export class ChannelAdminLogEventActionExportedInviteDelete extends TLConstructor<ChannelAdminLogEventActionExportedInviteDeleteValues> {
  static override CONSTRUCTOR_ID: number = 1515256996
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'invite',
      type: 'ExportedChatInvite',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get invite(): any {
    return this.getParamValue<any>('invite')
  }
}