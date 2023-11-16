import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetAppChangelogValues {
  prevAppVersion: string
}

export class HelpGetAppChangelog extends TLMethod<HelpGetAppChangelogValues> {
  static override CONSTRUCTOR_ID = -1877938321
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_app_version',
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

  get prevAppVersion(): string {
    return this.getParamValue<string>('prevAppVersion')
  }
}
