import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateChatParticipantsValues {
    participants: any;
}

export class UpdateChatParticipants extends TLConstructor<UpdateChatParticipantsValues> {
    static override CONSTRUCTOR_ID: number = 125178264;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "participants",
            "type": "ChatParticipants",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get participants(): any {
        return this.values.participants
    }
}
