import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionChatAddUserValues {
    users: Array<bigint>;
}

export class MessageActionChatAddUser extends TLConstructor<MessageActionChatAddUserValues> {
    static override CONSTRUCTOR_ID: number = 365886720;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "users",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get users(): Array<bigint> {
        return this.values.users
    }
}
