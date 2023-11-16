import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpTermsOfServiceUpdateValues {
  expires: number
  termsOfService: any
}

export class HelpTermsOfServiceUpdate extends TLConstructor<HelpTermsOfServiceUpdateValues> {
  static override CONSTRUCTOR_ID: number = 686618977
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
    {
      name: 'terms_of_service',
      type: 'help.TermsOfService',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get expires(): number {
    return this.getParamValue<number>('expires')
  }

  get termsOfService(): any {
    return this.getParamValue<any>('termsOfService')
  }
}
