import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesCheckChatInviteValues {
    hash: string;
}

export class MessagesCheckChatInvite extends TLMethod<MessagesCheckChatInviteValues> {
    static override CONSTRUCTOR_ID = 1051570619;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
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

    get hash(): string {
        return this.values.hash
    }
}
