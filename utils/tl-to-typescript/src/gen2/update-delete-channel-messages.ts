import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateDeleteChannelMessagesValues {
    channelId: bigint;
    messages: Array<number>;
    pts: number;
    ptsCount: number;
}

export class UpdateDeleteChannelMessages extends TLConstructor<UpdateDeleteChannelMessagesValues> {
    static override CONSTRUCTOR_ID: number = 3274529554;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "messages",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "pts",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pts_count",
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

    get channelId(): bigint {
        return this.values.channelId
    }

    get messages(): Array<number> {
        return this.values.messages
    }

    get pts(): number {
        return this.values.pts
    }

    get ptsCount(): number {
        return this.values.ptsCount
    }
}
