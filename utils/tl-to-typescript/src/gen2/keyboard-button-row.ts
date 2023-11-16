import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface KeyboardButtonRowValues {
    buttons: Array<any>;
}

export class KeyboardButtonRow extends TLConstructor<KeyboardButtonRowValues> {
    static override CONSTRUCTOR_ID: number = 2002815875;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "buttons",
            "type": "KeyboardButton",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get buttons(): Array<any> {
        return this.values.buttons
    }
}
