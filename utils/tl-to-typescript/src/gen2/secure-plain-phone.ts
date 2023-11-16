import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecurePlainPhoneValues {
    phone: string;
}

export class SecurePlainPhone extends TLConstructor<SecurePlainPhoneValues> {
    static override CONSTRUCTOR_ID: number = 2103482845;
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
