import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ContactsResolveUsernameValues {
    username: string;
}

export class ContactsResolveUsername extends TLMethod<ContactsResolveUsernameValues> {
    static override CONSTRUCTOR_ID = 4181511075;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "username",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get username(): string {
        return this.values.username
    }
}
