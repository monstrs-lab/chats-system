import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersCheckShortNameValues {
  shortName: string
}

export class StickersCheckShortName extends TLMethod<StickersCheckShortNameValues> {
  static override CONSTRUCTOR_ID = 676017721
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'short_name',
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

  get shortName(): string {
    return this.getParamValue<string>('shortName')
  }
}
