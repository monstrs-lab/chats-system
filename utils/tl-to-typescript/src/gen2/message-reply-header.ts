import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageReplyHeaderValues {
    flags: any;
    replyToScheduled: boolean;
    forumTopic: boolean;
    replyToMsgId: number;
    replyToPeerId: any;
    replyToTopId: number;
}

export class MessageReplyHeader extends TLConstructor<MessageReplyHeaderValues> {
    static override CONSTRUCTOR_ID: number = 2799007587;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "reply_to_scheduled",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "forum_topic",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reply_to_msg_id",
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
            "name": "reply_to_peer_id",
            "type": "Peer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reply_to_top_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get replyToScheduled(): boolean {
        return this.values.replyToScheduled
    }

    get forumTopic(): boolean {
        return this.values.forumTopic
    }

    get replyToMsgId(): number {
        return this.values.replyToMsgId
    }

    get replyToPeerId(): any {
        return this.values.replyToPeerId
    }

    get replyToTopId(): number {
        return this.values.replyToTopId
    }
}
