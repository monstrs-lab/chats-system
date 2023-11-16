import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface GlobalPrivacySettingsValues {
  flags: any
  archiveAndMuteNewNoncontactPeers: any
}

export class GlobalPrivacySettings extends TLConstructor<GlobalPrivacySettingsValues> {
  static override CONSTRUCTOR_ID: number = -1096616924
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
      name: 'archive_and_mute_new_noncontact_peers',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get archiveAndMuteNewNoncontactPeers(): any {
    return this.getParamValue<any>('archiveAndMuteNewNoncontactPeers')
  }
}
