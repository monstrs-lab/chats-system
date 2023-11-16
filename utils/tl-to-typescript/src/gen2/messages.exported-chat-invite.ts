import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesExportedChatInviteValues {
    invite: any;
    users: Array<any>;
}

export class MessagesExportedChatInvite extends TLConstructor<MessagesExportedChatInviteValues> {
    static override CONSTRUCTOR_ID: number = 410107472;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "invite",
            "type": "ExportedChatInvite",
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
            "type": "User",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get invite(): any {
        return this.values.invite
    }

    get users(): Array<any> {
        return this.values.users
    }
}
