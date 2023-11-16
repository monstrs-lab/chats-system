import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputKeyboardButtonUserProfileValues {
    text: string;
    userId: any;
}

export class InputKeyboardButtonUserProfile extends TLConstructor<InputKeyboardButtonUserProfileValues> {
    static override CONSTRUCTOR_ID: number = 3918005115;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "text",
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
            "name": "user_id",
            "type": "InputUser",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get text(): string {
        return this.values.text
    }

    get userId(): any {
        return this.values.userId
    }
}
