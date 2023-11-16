import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageMediaContactValues {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    vcard: string;
    userId: bigint;
}

export class MessageMediaContact extends TLConstructor<MessageMediaContactValues> {
    static override CONSTRUCTOR_ID: number = 1882335561;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "phone_number",
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
            "name": "vcard",
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
            "name": "user_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get phoneNumber(): string {
        return this.values.phoneNumber
    }

    get firstName(): string {
        return this.values.firstName
    }

    get lastName(): string {
        return this.values.lastName
    }

    get vcard(): string {
        return this.values.vcard
    }

    get userId(): bigint {
        return this.values.userId
    }
}
