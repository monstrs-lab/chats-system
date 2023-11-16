import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesUpdateDialogFiltersOrderValues {
    order: Array<number>;
}

export class MessagesUpdateDialogFiltersOrder extends TLMethod<MessagesUpdateDialogFiltersOrderValues> {
    static override CONSTRUCTOR_ID = 3311649252;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "order",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get order(): Array<number> {
        return this.values.order
    }
}
