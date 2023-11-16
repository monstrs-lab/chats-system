import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesImportChatInviteValues {
    hash: string;
}

export class MessagesImportChatInvite extends TLMethod<MessagesImportChatInviteValues> {
    static override CONSTRUCTOR_ID = 1817183516;
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
