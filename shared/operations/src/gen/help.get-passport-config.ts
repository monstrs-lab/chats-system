import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetPassportConfigValues {
  hash: number
}

export class HelpGetPassportConfig extends TLMethod<HelpGetPassportConfigValues> {
  static override CONSTRUCTOR_ID = -966677240
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
