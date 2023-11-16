import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface RequestPeerTypeBroadcastValues {
    flags: any;
    creator: boolean;
    hasUsername: any;
    userAdminRights: any;
    botAdminRights: any;
}

export class RequestPeerTypeBroadcast extends TLConstructor<RequestPeerTypeBroadcastValues> {
    static override CONSTRUCTOR_ID: number = 865857388;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "creator",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "has_username",
            "type": "Bool",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "user_admin_rights",
            "type": "ChatAdminRights",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "bot_admin_rights",
            "type": "ChatAdminRights",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get creator(): boolean {
        return this.values.creator
    }

    get hasUsername(): any {
        return this.values.hasUsername
    }

    get userAdminRights(): any {
        return this.values.userAdminRights
    }

    get botAdminRights(): any {
        return this.values.botAdminRights
    }
}
