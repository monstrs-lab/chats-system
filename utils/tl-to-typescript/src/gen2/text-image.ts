import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface TextImageValues {
    documentId: bigint;
    w: number;
    h: number;
}

export class TextImage extends TLConstructor<TextImageValues> {
    static override CONSTRUCTOR_ID: number = 136105807;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "document_id",
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

    get documentId(): bigint {
        return this.values.documentId
    }

    get w(): number {
        return this.values.w
    }

    get h(): number {
        return this.values.h
    }
}
