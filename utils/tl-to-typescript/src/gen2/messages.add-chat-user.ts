import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesAddChatUserValues {
    chatId: bigint;
    userId: any;
    fwdLimit: number;
}

export class MessagesAddChatUser extends TLMethod<MessagesAddChatUserValues> {
    static override CONSTRUCTOR_ID = 4064760803;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chat_id",
            "type": "long",
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
          },
          {
            "name": "fwd_limit",
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

    get chatId(): bigint {
        return this.values.chatId
    }

    get userId(): any {
        return this.values.userId
    }

    get fwdLimit(): number {
        return this.values.fwdLimit
    }
}
