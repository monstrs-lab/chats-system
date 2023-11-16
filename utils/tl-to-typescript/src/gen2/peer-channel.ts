import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PeerChannelValues {
    channelId: bigint;
}

export class PeerChannel extends TLConstructor<PeerChannelValues> {
    static override CONSTRUCTOR_ID: number = 2728736542;
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
          }
        ];

    get channelId(): bigint {
        return this.values.channelId
    }
}
