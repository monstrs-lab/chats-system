import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecurePlainEmailValues {
    email: string;
}

export class SecurePlainEmail extends TLConstructor<SecurePlainEmailValues> {
    static override CONSTRUCTOR_ID: number = 569137759;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "email",
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

    get email(): string {
        return this.values.email
    }
}
