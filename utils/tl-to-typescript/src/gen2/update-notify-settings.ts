import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateNotifySettingsValues {
    peer: any;
    notifySettings: any;
}

export class UpdateNotifySettings extends TLConstructor<UpdateNotifySettingsValues> {
    static override CONSTRUCTOR_ID: number = 3200411887;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "NotifyPeer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "notify_settings",
            "type": "PeerNotifySettings",
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

    get notifySettings(): any {
        return this.values.notifySettings
    }
}
