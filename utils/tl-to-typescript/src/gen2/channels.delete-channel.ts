import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ChannelsDeleteChannelValues {
    channel: any;
}

export class ChannelsDeleteChannel extends TLMethod<ChannelsDeleteChannelValues> {
    static override CONSTRUCTOR_ID = 3222347747;
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
          }
        ];

    get channel(): any {
        return this.values.channel
    }
}
