import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UserStatusOnlineValues {
    expires: number;
}

export class UserStatusOnline extends TLConstructor<UserStatusOnlineValues> {
    static override CONSTRUCTOR_ID: number = 3988339017;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "expires",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get expires(): number {
        return this.values.expires
    }
}
