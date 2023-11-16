import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetAppUpdateValues {
  source: string
}

export class HelpGetAppUpdate extends TLMethod<HelpGetAppUpdateValues> {
  static override CONSTRUCTOR_ID = 1378703997
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'source',
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

  get source(): string {
    return this.getParamValue<string>('source')
  }
}
