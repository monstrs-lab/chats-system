import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateDeleteScheduledMessagesValues {
    peer: any;
    messages: Array<number>;
}

export class UpdateDeleteScheduledMessages extends TLConstructor<UpdateDeleteScheduledMessagesValues> {
    static override CONSTRUCTOR_ID: number = 2424728814;
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
            "name": "messages",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get peer(): any {
        return this.values.peer
    }

    get messages(): Array<number> {
        return this.values.messages
    }
}
