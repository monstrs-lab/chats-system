import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionCreateTopicValues {
    topic: any;
}

export class ChannelAdminLogEventActionCreateTopic extends TLConstructor<ChannelAdminLogEventActionCreateTopicValues> {
    static override CONSTRUCTOR_ID: number = 1483767080;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "topic",
            "type": "ForumTopic",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get topic(): any {
        return this.values.topic
    }
}
