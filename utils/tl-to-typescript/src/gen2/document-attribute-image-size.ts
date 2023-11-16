import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DocumentAttributeImageSizeValues {
    w: number;
    h: number;
}

export class DocumentAttributeImageSize extends TLConstructor<DocumentAttributeImageSizeValues> {
    static override CONSTRUCTOR_ID: number = 1815593308;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
          }
        ];

    get w(): number {
        return this.values.w
    }

    get h(): number {
        return this.values.h
    }
}
