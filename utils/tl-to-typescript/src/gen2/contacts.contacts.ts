import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ContactsContactsValues {
    contacts: Array<any>;
    savedCount: number;
    users: Array<any>;
}

export class ContactsContacts extends TLConstructor<ContactsContactsValues> {
    static override CONSTRUCTOR_ID: number = 3941105218;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "contacts",
            "type": "Contact",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "saved_count",
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

    get contacts(): Array<any> {
        return this.values.contacts
    }

    get savedCount(): number {
        return this.values.savedCount
    }

    get users(): Array<any> {
        return this.values.users
    }
}
