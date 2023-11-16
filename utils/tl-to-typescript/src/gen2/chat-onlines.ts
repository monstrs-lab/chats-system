import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChatOnlinesValues {
    onlines: number;
}

export class ChatOnlines extends TLConstructor<ChatOnlinesValues> {
    static override CONSTRUCTOR_ID: number = 4030849616;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "onlines",
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

    get onlines(): number {
        return this.values.onlines
    }
}
