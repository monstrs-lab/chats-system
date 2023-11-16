import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdatesDifferenceEmptyValues {
    date: number;
    seq: number;
}

export class UpdatesDifferenceEmpty extends TLConstructor<UpdatesDifferenceEmptyValues> {
    static override CONSTRUCTOR_ID: number = 1567990072;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "seq",
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

    get date(): number {
        return this.values.date
    }

    get seq(): number {
        return this.values.seq
    }
}
