import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountAutoSaveSettingsValues {
    usersSettings: any;
    chatsSettings: any;
    broadcastsSettings: any;
    exceptions: Array<any>;
    chats: Array<any>;
    users: Array<any>;
}

export class AccountAutoSaveSettings extends TLConstructor<AccountAutoSaveSettingsValues> {
    static override CONSTRUCTOR_ID: number = 1279133341;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "users_settings",
            "type": "AutoSaveSettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chats_settings",
            "type": "AutoSaveSettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "broadcasts_settings",
            "type": "AutoSaveSettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "exceptions",
            "type": "AutoSaveException",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
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

    get usersSettings(): any {
        return this.values.usersSettings
    }

    get chatsSettings(): any {
        return this.values.chatsSettings
    }

    get broadcastsSettings(): any {
        return this.values.broadcastsSettings
    }

    get exceptions(): Array<any> {
        return this.values.exceptions
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get users(): Array<any> {
        return this.values.users
    }
}
