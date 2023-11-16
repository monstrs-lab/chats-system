import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PhoneGroupCallStreamChannelsValues {
    channels: Array<any>;
}

export class PhoneGroupCallStreamChannels extends TLConstructor<PhoneGroupCallStreamChannelsValues> {
    static override CONSTRUCTOR_ID: number = 3504636594;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "channels",
            "type": "GroupCallStreamChannel",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get channels(): Array<any> {
        return this.values.channels
    }
}
