import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesHidePeerSettingsBarValues {
    peer: any;
}

export class MessagesHidePeerSettingsBar extends TLMethod<MessagesHidePeerSettingsBarValues> {
    static override CONSTRUCTOR_ID = 1336717624;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "InputPeer",
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
}
