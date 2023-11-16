import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockMapValues {
    geo: any;
    zoom: number;
    w: number;
    h: number;
    caption: any;
}

export class PageBlockMap extends TLConstructor<PageBlockMapValues> {
    static override CONSTRUCTOR_ID: number = 2756656886;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "geo",
            "type": "GeoPoint",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "zoom",
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
            "name": "w",
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
            "name": "h",
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

    get geo(): any {
        return this.values.geo
    }

    get zoom(): number {
        return this.values.zoom
    }

    get w(): number {
        return this.values.w
    }

    get h(): number {
        return this.values.h
    }

    get caption(): any {
        return this.values.caption
    }
}
