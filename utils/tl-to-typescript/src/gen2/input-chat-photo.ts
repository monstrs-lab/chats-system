import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputChatPhotoValues {
    id: any;
}

export class InputChatPhoto extends TLConstructor<InputChatPhotoValues> {
    static override CONSTRUCTOR_ID: number = 2303962423;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputPhoto",
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
