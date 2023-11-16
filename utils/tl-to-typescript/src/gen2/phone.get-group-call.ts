import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhoneGetGroupCallValues {
    call: any;
    limit: number;
}

export class PhoneGetGroupCall extends TLMethod<PhoneGetGroupCallValues> {
    static override CONSTRUCTOR_ID = 68699611;
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
            "name": "limit",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get call(): any {
        return this.values.call
    }

    get limit(): number {
        return this.values.limit
    }
}
