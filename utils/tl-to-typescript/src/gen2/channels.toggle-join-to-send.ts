import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ChannelsToggleJoinToSendValues {
    channel: any;
    enabled: any;
}

export class ChannelsToggleJoinToSend extends TLMethod<ChannelsToggleJoinToSendValues> {
    static override CONSTRUCTOR_ID = 3838547328;
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
            "name": "enabled",
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

    get channel(): any {
        return this.values.channel
    }

    get enabled(): any {
        return this.values.enabled
    }
}
