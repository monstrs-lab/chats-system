import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetAppConfigValues {
  hash: number
}

export class HelpGetAppConfig extends TLMethod<HelpGetAppConfigValues> {
  static override CONSTRUCTOR_ID = 1642330196
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get hash(): number {
    return this.getParamValue<number>('hash')
  }
}
