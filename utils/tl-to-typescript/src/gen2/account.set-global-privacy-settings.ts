import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountSetGlobalPrivacySettingsValues {
    settings: any;
}

export class AccountSetGlobalPrivacySettings extends TLMethod<AccountSetGlobalPrivacySettingsValues> {
    static override CONSTRUCTOR_ID = 517647042;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "settings",
            "type": "GlobalPrivacySettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get settings(): any {
        return this.values.settings
    }
}
