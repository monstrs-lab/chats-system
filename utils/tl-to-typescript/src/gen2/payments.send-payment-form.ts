import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PaymentsSendPaymentFormValues {
    flags: any;
    formId: bigint;
    invoice: any;
    requestedInfoId: string;
    shippingOptionId: string;
    credentials: any;
    tipAmount: bigint;
}

export class PaymentsSendPaymentForm extends TLMethod<PaymentsSendPaymentFormValues> {
    static override CONSTRUCTOR_ID = 755192367;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "form_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "invoice",
            "type": "InputInvoice",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "requested_info_id",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "shipping_option_id",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "credentials",
            "type": "InputPaymentCredentials",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "tip_amount",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get formId(): bigint {
        return this.values.formId
    }

    get invoice(): any {
        return this.values.invoice
    }

    get requestedInfoId(): string {
        return this.values.requestedInfoId
    }

    get shippingOptionId(): string {
        return this.values.shippingOptionId
    }

    get credentials(): any {
        return this.values.credentials
    }

    get tipAmount(): bigint {
        return this.values.tipAmount
    }
}
