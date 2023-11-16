import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountSavedRingtonesValues {
    hash: bigint;
    ringtones: Array<any>;
}

export class AccountSavedRingtones extends TLConstructor<AccountSavedRingtonesValues> {
    static override CONSTRUCTOR_ID: number = 3253284037;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "ringtones",
            "type": "Document",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get hash(): bigint {
        return this.values.hash
    }

    get ringtones(): Array<any> {
        return this.values.ringtones
    }
}
