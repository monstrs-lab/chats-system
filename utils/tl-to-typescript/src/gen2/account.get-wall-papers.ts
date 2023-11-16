import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetWallPapersValues {
    hash: bigint;
}

export class AccountGetWallPapers extends TLMethod<AccountGetWallPapersValues> {
    static override CONSTRUCTOR_ID = 127302966;
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
          }
        ];

    get hash(): bigint {
        return this.values.hash
    }
}
