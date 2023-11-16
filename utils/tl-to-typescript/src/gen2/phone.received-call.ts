import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhoneReceivedCallValues {
    peer: any;
}

export class PhoneReceivedCall extends TLMethod<PhoneReceivedCallValues> {
    static override CONSTRUCTOR_ID = 399855457;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "InputPhoneCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get peer(): any {
        return this.values.peer
    }
}
