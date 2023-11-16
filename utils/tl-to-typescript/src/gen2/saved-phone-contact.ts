import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SavedPhoneContactValues {
    phone: string;
    firstName: string;
    lastName: string;
    date: number;
}

export class SavedPhoneContact extends TLConstructor<SavedPhoneContactValues> {
    static override CONSTRUCTOR_ID: number = 289586518;
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
          },
          {
            "name": "first_name",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "last_name",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
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
          }
        ];

    get phone(): string {
        return this.values.phone
    }

    get firstName(): string {
        return this.values.firstName
    }

    get lastName(): string {
        return this.values.lastName
    }

    get date(): number {
        return this.values.date
    }
}
