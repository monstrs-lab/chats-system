import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PaymentsValidatedRequestedInfoValues {
    flags: any;
    id: string;
    shippingOptions: Array<any>;
}

export class PaymentsValidatedRequestedInfo extends TLConstructor<PaymentsValidatedRequestedInfoValues> {
    static override CONSTRUCTOR_ID: number = 3510966403;
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
            "name": "id",
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
            "name": "shipping_options",
            "type": "ShippingOption",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get id(): string {
        return this.values.id
    }

    get shippingOptions(): Array<any> {
        return this.values.shippingOptions
    }
}
