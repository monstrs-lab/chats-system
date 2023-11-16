import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetDeepLinkInfoValues {
  path: string
}

export class HelpGetDeepLinkInfo extends TLMethod<HelpGetDeepLinkInfoValues> {
  static override CONSTRUCTOR_ID = 1072547679
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'path',
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

  get path(): string {
    return this.getParamValue<string>('path')
  }
}
