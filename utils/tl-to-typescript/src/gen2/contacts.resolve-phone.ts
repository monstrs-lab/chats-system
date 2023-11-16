import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ContactsResolvePhoneValues {
    phone: string;
}

export class ContactsResolvePhone extends TLMethod<ContactsResolvePhoneValues> {
    static override CONSTRUCTOR_ID = 2331591492;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "phone",
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

    get phone(): string {
        return this.values.phone
    }
}
