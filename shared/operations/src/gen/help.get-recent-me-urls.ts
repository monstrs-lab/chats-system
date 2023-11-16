import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetRecentMeUrlsValues {
  referer: string
}

export class HelpGetRecentMeUrls extends TLMethod<HelpGetRecentMeUrlsValues> {
  static override CONSTRUCTOR_ID = 1036054804
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'referer',
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

  get referer(): string {
    return this.getParamValue<string>('referer')
  }
}
