import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SearchResultPositionValues {
    msgId: number;
    date: number;
    offset: number;
}

export class SearchResultPosition extends TLConstructor<SearchResultPositionValues> {
    static override CONSTRUCTOR_ID: number = 2137295719;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "msg_id",
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
            "name": "date",
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
            "name": "offset",
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

    get msgId(): number {
        return this.values.msgId
    }

    get date(): number {
        return this.values.date
    }

    get offset(): number {
        return this.values.offset
    }
}
