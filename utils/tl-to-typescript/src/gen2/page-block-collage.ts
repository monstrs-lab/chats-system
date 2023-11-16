import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockCollageValues {
    items: Array<any>;
    caption: any;
}

export class PageBlockCollage extends TLConstructor<PageBlockCollageValues> {
    static override CONSTRUCTOR_ID: number = 1705048653;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "items",
            "type": "PageBlock",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "caption",
            "type": "PageCaption",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get items(): Array<any> {
        return this.values.items
    }

    get caption(): any {
        return this.values.caption
    }
}
