import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyValueAllowChatParticipantsValues {
    chats: Array<bigint>;
}

export class PrivacyValueAllowChatParticipants extends TLConstructor<PrivacyValueAllowChatParticipantsValues> {
    static override CONSTRUCTOR_ID: number = 1796427406;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chats",
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

    get chats(): Array<bigint> {
        return this.values.chats
    }
}
