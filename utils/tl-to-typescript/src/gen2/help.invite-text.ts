import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpInviteTextValues {
    message: string;
}

export class HelpInviteText extends TLConstructor<HelpInviteTextValues> {
    static override CONSTRUCTOR_ID: number = 415997816;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "message",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get message(): string {
        return this.values.message
    }
}
