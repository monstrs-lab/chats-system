import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionBotAllowedValues {
    domain: string;
}

export class MessageActionBotAllowed extends TLConstructor<MessageActionBotAllowedValues> {
    static override CONSTRUCTOR_ID: number = 2884218878;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "domain",
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

    get domain(): string {
        return this.values.domain
    }
}
