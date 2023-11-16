import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockChannelValues {
    channel: any;
}

export class PageBlockChannel extends TLConstructor<PageBlockChannelValues> {
    static override CONSTRUCTOR_ID: number = 4011282869;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "channel",
            "type": "Chat",
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
