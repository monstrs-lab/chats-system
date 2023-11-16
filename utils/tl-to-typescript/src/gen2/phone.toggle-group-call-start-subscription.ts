import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhoneToggleGroupCallStartSubscriptionValues {
    call: any;
    subscribed: any;
}

export class PhoneToggleGroupCallStartSubscription extends TLMethod<PhoneToggleGroupCallStartSubscriptionValues> {
    static override CONSTRUCTOR_ID = 563885286;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "subscribed",
            "type": "Bool",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get call(): any {
        return this.values.call
    }

    get subscribed(): any {
        return this.values.subscribed
    }
}
