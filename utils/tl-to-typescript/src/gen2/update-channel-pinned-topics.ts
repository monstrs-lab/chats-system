import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateChannelPinnedTopicsValues {
    flags: any;
    channelId: bigint;
    order: Array<number>;
}

export class UpdateChannelPinnedTopics extends TLConstructor<UpdateChannelPinnedTopicsValues> {
    static override CONSTRUCTOR_ID: number = 4263085570;
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
            "name": "channel_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "order",
            "type": "int",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get channelId(): bigint {
        return this.values.channelId
    }

    get order(): Array<number> {
        return this.values.order
    }
}
