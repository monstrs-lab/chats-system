import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsExportInvoiceValues {
  invoiceMedia: any
}

export class PaymentsExportInvoice extends TLMethod<PaymentsExportInvoiceValues> {
  static override CONSTRUCTOR_ID = 261206117
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'invoice_media',
      type: 'InputMedia',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get invoiceMedia(): any {
    return this.getParamValue<any>('invoiceMedia')
  }
}
