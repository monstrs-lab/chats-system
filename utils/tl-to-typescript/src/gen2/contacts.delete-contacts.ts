import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ContactsDeleteContactsValues {
    id: Array<any>;
}

export class ContactsDeleteContacts extends TLMethod<ContactsDeleteContactsValues> {
    static override CONSTRUCTOR_ID = 157945344;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputUser",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get id(): Array<any> {
        return this.values.id
    }
}
