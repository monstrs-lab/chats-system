import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesFeaturedStickersNotModifiedValues {
    count: number;
}

export class MessagesFeaturedStickersNotModified extends TLConstructor<MessagesFeaturedStickersNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 3336309862;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "count",
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

    get count(): number {
        return this.values.count
    }
}
