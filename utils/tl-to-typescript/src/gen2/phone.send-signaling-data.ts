import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhoneSendSignalingDataValues {
    peer: any;
    data: Buffer;
}

export class PhoneSendSignalingData extends TLMethod<PhoneSendSignalingDataValues> {
    static override CONSTRUCTOR_ID = 4286223235;
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
          },
          {
            "name": "data",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get peer(): any {
        return this.values.peer
    }

    get data(): Buffer {
        return this.values.data
    }
}
