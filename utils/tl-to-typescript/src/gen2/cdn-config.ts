import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface CdnConfigValues {
    publicKeys: Array<any>;
}

export class CdnConfig extends TLConstructor<CdnConfigValues> {
    static override CONSTRUCTOR_ID: number = 1462101002;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "public_keys",
            "type": "CdnPublicKey",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get publicKeys(): Array<any> {
        return this.values.publicKeys
    }
}
