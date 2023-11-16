import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UsersUserFullValues {
    fullUser: any;
    chats: Array<any>;
    users: Array<any>;
}

export class UsersUserFull extends TLConstructor<UsersUserFullValues> {
    static override CONSTRUCTOR_ID: number = 997004590;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "full_user",
            "type": "UserFull",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chats",
            "type": "Chat",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
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

    get fullUser(): any {
        return this.values.fullUser
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get users(): Array<any> {
        return this.values.users
    }
}
