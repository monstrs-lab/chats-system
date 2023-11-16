import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdatesValues {
    updates: Array<any>;
    users: Array<any>;
    chats: Array<any>;
    date: number;
    seq: number;
}

export class Updates extends TLConstructor<UpdatesValues> {
    static override CONSTRUCTOR_ID: number = 1957577280;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "updates",
            "type": "Update",
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
            "name": "date",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "seq",
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

    get updates(): Array<any> {
        return this.values.updates
    }

    get users(): Array<any> {
        return this.values.users
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get date(): number {
        return this.values.date
    }

    get seq(): number {
        return this.values.seq
    }
}
