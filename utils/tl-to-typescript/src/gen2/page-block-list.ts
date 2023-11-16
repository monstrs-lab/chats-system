import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockListValues {
    items: Array<any>;
}

export class PageBlockList extends TLConstructor<PageBlockListValues> {
    static override CONSTRUCTOR_ID: number = 3840442385;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "items",
            "type": "PageListItem",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get items(): Array<any> {
        return this.values.items
    }
}
