import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageValues {
    msgId: bigint;
    seqno: number;
    bytes: number;
    body: any;
}

export class Message extends TLConstructor<MessageValues> {
    static override CONSTRUCTOR_ID: number = 1538843921;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "msg_id",
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
            "name": "seqno",
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
            "name": "bytes",
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
            "name": "body",
            "type": "Object",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get msgId(): bigint {
        return this.values.msgId
    }

    get seqno(): number {
        return this.values.seqno
    }

    get bytes(): number {
        return this.values.bytes
    }

    get body(): any {
        return this.values.body
    }
}
