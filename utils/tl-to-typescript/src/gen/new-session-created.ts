import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NewSessionCreatedValues {
    firstMsgId: bigint;
    uniqueId: bigint;
    serverSalt: bigint;
}

export class NewSessionCreated extends TLConstructor<NewSessionCreatedValues> {
    static override CONSTRUCTOR_ID: number = -1631450872;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "first_msg_id",
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
            "name": "unique_id",
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
            "name": "server_salt",
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

    get firstMsgId(): bigint {
        return this.values.firstMsgId
    }

    get uniqueId(): bigint {
        return this.values.uniqueId
    }

    get serverSalt(): bigint {
        return this.values.serverSalt
    }
}
