import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputWebDocumentValues {
    url: string;
    size: number;
    mimeType: string;
    attributes: Array<any>;
}

export class InputWebDocument extends TLConstructor<InputWebDocumentValues> {
    static override CONSTRUCTOR_ID: number = 2616017741;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "url",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "size",
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
            "name": "mime_type",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "attributes",
            "type": "DocumentAttribute",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get url(): string {
        return this.values.url
    }

    get size(): number {
        return this.values.size
    }

    get mimeType(): string {
        return this.values.mimeType
    }

    get attributes(): Array<any> {
        return this.values.attributes
    }
}
