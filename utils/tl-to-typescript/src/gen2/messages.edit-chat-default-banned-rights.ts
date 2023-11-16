import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesEditChatDefaultBannedRightsValues {
    peer: any;
    bannedRights: any;
}

export class MessagesEditChatDefaultBannedRights extends TLMethod<MessagesEditChatDefaultBannedRightsValues> {
    static override CONSTRUCTOR_ID = 2777049921;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "InputPeer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "banned_rights",
            "type": "ChatBannedRights",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get peer(): any {
        return this.values.peer
    }

    get bannedRights(): any {
        return this.values.bannedRights
    }
}
