import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PaymentsPaymentResultValues {
    updates: any;
}

export class PaymentsPaymentResult extends TLConstructor<PaymentsPaymentResultValues> {
    static override CONSTRUCTOR_ID: number = 1314881805;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "updates",
            "type": "Updates",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get updates(): any {
        return this.values.updates
    }
}
