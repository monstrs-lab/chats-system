import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputNotifyForumTopicValues {
    peer: any;
    topMsgId: number;
}

export class InputNotifyForumTopic extends TLConstructor<InputNotifyForumTopicValues> {
    static override CONSTRUCTOR_ID: number = 1548122514;
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
          },
          {
            "name": "top_msg_id",
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

    get peer(): any {
        return this.values.peer
    }

    get topMsgId(): number {
        return this.values.topMsgId
    }
}
