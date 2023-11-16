import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpTermsOfServiceUpdateEmptyValues {
  expires: number
}

export class HelpTermsOfServiceUpdateEmpty extends TLConstructor<HelpTermsOfServiceUpdateEmptyValues> {
  static override CONSTRUCTOR_ID: number = -483352705
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'expires',
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

  get expires(): number {
    return this.getParamValue<number>('expires')
  }
}
