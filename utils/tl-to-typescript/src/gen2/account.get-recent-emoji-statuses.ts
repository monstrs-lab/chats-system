import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetRecentEmojiStatusesValues {
    hash: bigint;
}

export class AccountGetRecentEmojiStatuses extends TLMethod<AccountGetRecentEmojiStatusesValues> {
    static override CONSTRUCTOR_ID = 257392901;
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
