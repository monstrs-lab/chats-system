import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetPeerDialogsValues {
    peers: Array<any>;
}

export class MessagesGetPeerDialogs extends TLMethod<MessagesGetPeerDialogsValues> {
    static override CONSTRUCTOR_ID = 3832593661;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peers",
            "type": "InputDialogPeer",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get peers(): Array<any> {
        return this.values.peers
    }
}
