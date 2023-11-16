import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaGameValues {
    id: any;
}

export class InputMediaGame extends TLConstructor<InputMediaGameValues> {
    static override CONSTRUCTOR_ID: number = 3544138739;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputGame",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): any {
        return this.values.id
    }
}
