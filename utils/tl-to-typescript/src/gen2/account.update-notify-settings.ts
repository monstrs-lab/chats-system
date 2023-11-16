import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountUpdateNotifySettingsValues {
    peer: any;
    settings: any;
}

export class AccountUpdateNotifySettings extends TLMethod<AccountUpdateNotifySettingsValues> {
    static override CONSTRUCTOR_ID = 2227067795;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "InputNotifyPeer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "settings",
            "type": "InputPeerNotifySettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get peer(): any {
        return this.values.peer
    }

    get settings(): any {
        return this.values.settings
    }
}
