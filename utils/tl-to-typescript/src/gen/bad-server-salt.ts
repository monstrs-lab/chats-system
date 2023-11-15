import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BadServerSaltValues {
    badMsgId: bigint;
    badMsgSeqno: number;
    errorCode: number;
    newServerSalt: bigint;
}

export class BadServerSalt extends TLConstructor<BadServerSaltValues> {
    static override CONSTRUCTOR_ID: number = -307542917;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "bad_msg_id",
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
            "name": "bad_msg_seqno",
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
            "name": "error_code",
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
            "name": "new_server_salt",
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

    get badMsgId(): bigint {
        return this.values.badMsgId
    }

    get badMsgSeqno(): number {
        return this.values.badMsgSeqno
    }

    get errorCode(): number {
        return this.values.errorCode
    }

    get newServerSalt(): bigint {
        return this.values.newServerSalt
    }
}
