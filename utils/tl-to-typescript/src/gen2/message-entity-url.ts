import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageEntityUrlValues {
    offset: number;
    length: number;
}

export class MessageEntityUrl extends TLConstructor<MessageEntityUrlValues> {
    static override CONSTRUCTOR_ID: number = 1859134776;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "offset",
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
            "name": "length",
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

    get offset(): number {
        return this.values.offset
    }

    get length(): number {
        return this.values.length
    }
}
