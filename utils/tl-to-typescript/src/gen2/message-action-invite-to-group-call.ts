import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionInviteToGroupCallValues {
    call: any;
    users: Array<bigint>;
}

export class MessageActionInviteToGroupCall extends TLConstructor<MessageActionInviteToGroupCallValues> {
    static override CONSTRUCTOR_ID: number = 1345295095;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
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

    get call(): any {
        return this.values.call
    }

    get users(): Array<bigint> {
        return this.values.users
    }
}
