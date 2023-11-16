import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountThemesValues {
    hash: bigint;
    themes: Array<any>;
}

export class AccountThemes extends TLConstructor<AccountThemesValues> {
    static override CONSTRUCTOR_ID: number = 2587724909;
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
            "name": "themes",
            "type": "Theme",
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

    get themes(): Array<any> {
        return this.values.themes
    }
}
