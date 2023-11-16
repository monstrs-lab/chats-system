import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthSentCodeSuccessValues {
    authorization: any;
}

export class AuthSentCodeSuccess extends TLConstructor<AuthSentCodeSuccessValues> {
    static override CONSTRUCTOR_ID: number = 596704836;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "authorization",
            "type": "auth.Authorization",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get authorization(): any {
        return this.values.authorization
    }
}
