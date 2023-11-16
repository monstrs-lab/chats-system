import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ChannelsViewSponsoredMessageValues {
    channel: any;
    randomId: Buffer;
}

export class ChannelsViewSponsoredMessage extends TLMethod<ChannelsViewSponsoredMessageValues> {
    static override CONSTRUCTOR_ID = 3199130516;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "channel",
            "type": "InputChannel",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "random_id",
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

    get channel(): any {
        return this.values.channel
    }

    get randomId(): Buffer {
        return this.values.randomId
    }
}
