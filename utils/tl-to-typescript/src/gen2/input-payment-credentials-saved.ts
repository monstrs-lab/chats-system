import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPaymentCredentialsSavedValues {
    id: string;
    tmpPassword: Buffer;
}

export class InputPaymentCredentialsSaved extends TLConstructor<InputPaymentCredentialsSavedValues> {
    static override CONSTRUCTOR_ID: number = 3238965967;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "tmp_password",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): string {
        return this.values.id
    }

    get tmpPassword(): Buffer {
        return this.values.tmpPassword
    }
}
