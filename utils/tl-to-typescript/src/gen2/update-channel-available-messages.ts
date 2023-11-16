import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateChannelAvailableMessagesValues {
    channelId: bigint;
    availableMinId: number;
}

export class UpdateChannelAvailableMessages extends TLConstructor<UpdateChannelAvailableMessagesValues> {
    static override CONSTRUCTOR_ID: number = 2990524056;
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
            "name": "available_min_id",
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

    get availableMinId(): number {
        return this.values.availableMinId
    }
}
