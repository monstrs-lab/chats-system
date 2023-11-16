import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateDialogFilterOrderValues {
    order: Array<number>;
}

export class UpdateDialogFilterOrder extends TLConstructor<UpdateDialogFilterOrderValues> {
    static override CONSTRUCTOR_ID: number = 2782339333;
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
