import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ChannelsGetForumTopicsByIDValues {
    channel: any;
    topics: Array<number>;
}

export class ChannelsGetForumTopicsByID extends TLMethod<ChannelsGetForumTopicsByIDValues> {
    static override CONSTRUCTOR_ID = 2961383097;
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
            "name": "topics",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get channel(): any {
        return this.values.channel
    }

    get topics(): Array<number> {
        return this.values.topics
    }
}
