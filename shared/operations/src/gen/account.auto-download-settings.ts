import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountAutoDownloadSettingsValues {
  low: any
  medium: any
  high: any
}

export class AccountAutoDownloadSettings extends TLConstructor<AccountAutoDownloadSettingsValues> {
  static override CONSTRUCTOR_ID: number = 1674235686
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'low',
      type: 'AutoDownloadSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'medium',
      type: 'AutoDownloadSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'high',
      type: 'AutoDownloadSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get low(): any {
    return this.getParamValue<any>('low')
  }

  get medium(): any {
    return this.getParamValue<any>('medium')
  }

  get high(): any {
    return this.getParamValue<any>('high')
  }
}
