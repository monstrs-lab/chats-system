import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateMessageExtendedMediaValues {
    peer: any;
    msgId: number;
    extendedMedia: any;
}

export class UpdateMessageExtendedMedia extends TLConstructor<UpdateMessageExtendedMediaValues> {
    static override CONSTRUCTOR_ID: number = 1517529484;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "peer",
            "type": "Peer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "msg_id",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "extended_media",
            "type": "MessageExtendedMedia",
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

    get msgId(): number {
        return this.values.msgId
    }

    get extendedMedia(): any {
        return this.values.extendedMedia
    }
}
