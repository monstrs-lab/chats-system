import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageInteractionCountersValues {
    msgId: number;
    views: number;
    forwards: number;
}

export class MessageInteractionCounters extends TLConstructor<MessageInteractionCountersValues> {
    static override CONSTRUCTOR_ID: number = 2907687357;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "views",
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
            "name": "forwards",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get msgId(): number {
        return this.values.msgId
    }

    get views(): number {
        return this.values.views
    }

    get forwards(): number {
        return this.values.forwards
    }
}
