import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockSlideshowValues {
    items: Array<any>;
    caption: any;
}

export class PageBlockSlideshow extends TLConstructor<PageBlockSlideshowValues> {
    static override CONSTRUCTOR_ID: number = 52401552;
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
