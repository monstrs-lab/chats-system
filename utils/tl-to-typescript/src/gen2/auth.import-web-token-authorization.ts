import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthImportWebTokenAuthorizationValues {
    apiId: number;
    apiHash: string;
    webAuthToken: string;
}

export class AuthImportWebTokenAuthorization extends TLMethod<AuthImportWebTokenAuthorizationValues> {
    static override CONSTRUCTOR_ID = 767062953;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "api_id",
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
            "name": "api_hash",
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
            "name": "web_auth_token",
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

    get apiId(): number {
        return this.values.apiId
    }

    get apiHash(): string {
        return this.values.apiHash
    }

    get webAuthToken(): string {
        return this.values.webAuthToken
    }
}
