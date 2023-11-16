import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsValidateRequestedInfoValues {
  flags: any
  save: boolean
  invoice: any
  info: any
}

export class PaymentsValidateRequestedInfo extends TLMethod<PaymentsValidateRequestedInfoValues> {
  static override CONSTRUCTOR_ID = -1228345045
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'save',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'invoice',
      type: 'InputInvoice',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'info',
      type: 'PaymentRequestedInfo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get save(): boolean {
    return this.getParamValue<boolean>('save')
  }

  get invoice(): any {
    return this.getParamValue<any>('invoice')
  }

  get info(): any {
    return this.getParamValue<any>('info')
  }
}
