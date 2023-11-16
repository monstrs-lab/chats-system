import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChatInviteAlreadyValues {
    chat: any;
}

export class ChatInviteAlready extends TLConstructor<ChatInviteAlreadyValues> {
    static override CONSTRUCTOR_ID: number = 1516793212;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chat",
            "type": "Chat",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get chat(): any {
        return this.values.chat
    }
}
