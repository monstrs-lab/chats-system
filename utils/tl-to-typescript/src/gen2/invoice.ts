import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InvoiceValues {
    flags: any;
    test: boolean;
    nameRequested: boolean;
    phoneRequested: boolean;
    emailRequested: boolean;
    shippingAddressRequested: boolean;
    flexible: boolean;
    phoneToProvider: boolean;
    emailToProvider: boolean;
    recurring: boolean;
    currency: string;
    prices: Array<any>;
    maxTipAmount: bigint;
    suggestedTipAmounts: Array<bigint>;
    recurringTermsUrl: string;
}

export class Invoice extends TLConstructor<InvoiceValues> {
    static override CONSTRUCTOR_ID: number = 1048946971;
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
            "name": "test",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "name_requested",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "phone_requested",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "email_requested",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "shipping_address_requested",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "flexible",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "phone_to_provider",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "email_to_provider",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "recurring",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "currency",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "prices",
            "type": "LabeledPrice",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "max_tip_amount",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "suggested_tip_amounts",
            "type": "long",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "recurring_terms_url",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get test(): boolean {
        return this.values.test
    }

    get nameRequested(): boolean {
        return this.values.nameRequested
    }

    get phoneRequested(): boolean {
        return this.values.phoneRequested
    }

    get emailRequested(): boolean {
        return this.values.emailRequested
    }

    get shippingAddressRequested(): boolean {
        return this.values.shippingAddressRequested
    }

    get flexible(): boolean {
        return this.values.flexible
    }

    get phoneToProvider(): boolean {
        return this.values.phoneToProvider
    }

    get emailToProvider(): boolean {
        return this.values.emailToProvider
    }

    get recurring(): boolean {
        return this.values.recurring
    }

    get currency(): string {
        return this.values.currency
    }

    get prices(): Array<any> {
        return this.values.prices
    }

    get maxTipAmount(): bigint {
        return this.values.maxTipAmount
    }

    get suggestedTipAmounts(): Array<bigint> {
        return this.values.suggestedTipAmounts
    }

    get recurringTermsUrl(): string {
        return this.values.recurringTermsUrl
    }
}
