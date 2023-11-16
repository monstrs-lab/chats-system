import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageValues {
    flags: any;
    out: boolean;
    mentioned: boolean;
    mediaUnread: boolean;
    silent: boolean;
    post: boolean;
    fromScheduled: boolean;
    legacy: boolean;
    editHide: boolean;
    pinned: boolean;
    noforwards: boolean;
    id: number;
    fromId: any;
    peerId: any;
    fwdFrom: any;
    viaBotId: bigint;
    replyTo: any;
    date: number;
    message: string;
    media: any;
    replyMarkup: any;
    entities: Array<any>;
    views: number;
    forwards: number;
    replies: any;
    editDate: number;
    postAuthor: string;
    groupedId: bigint;
    reactions: any;
    restrictionReason: Array<any>;
    ttlPeriod: number;
}

export class Message extends TLConstructor<MessageValues> {
    static override CONSTRUCTOR_ID: number = 940666592;
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
            "name": "out",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "mentioned",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "media_unread",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "silent",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 13,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "post",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "from_scheduled",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 18,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "legacy",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 19,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "edit_hide",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 21,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pinned",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 24,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "noforwards",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 26,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "id",
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
            "name": "from_id",
            "type": "Peer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "peer_id",
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
            "name": "fwd_from",
            "type": "MessageFwdHeader",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "via_bot_id",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reply_to",
            "type": "MessageReplyHeader",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "date",
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
            "name": "message",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "media",
            "type": "MessageMedia",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reply_markup",
            "type": "ReplyMarkup",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "views",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "forwards",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "replies",
            "type": "MessageReplies",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 23,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "edit_date",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "post_author",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 16,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "grouped_id",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reactions",
            "type": "MessageReactions",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 20,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "restriction_reason",
            "type": "RestrictionReason",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 22,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "ttl_period",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 25,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get out(): boolean {
        return this.values.out
    }

    get mentioned(): boolean {
        return this.values.mentioned
    }

    get mediaUnread(): boolean {
        return this.values.mediaUnread
    }

    get silent(): boolean {
        return this.values.silent
    }

    get post(): boolean {
        return this.values.post
    }

    get fromScheduled(): boolean {
        return this.values.fromScheduled
    }

    get legacy(): boolean {
        return this.values.legacy
    }

    get editHide(): boolean {
        return this.values.editHide
    }

    get pinned(): boolean {
        return this.values.pinned
    }

    get noforwards(): boolean {
        return this.values.noforwards
    }

    get id(): number {
        return this.values.id
    }

    get fromId(): any {
        return this.values.fromId
    }

    get peerId(): any {
        return this.values.peerId
    }

    get fwdFrom(): any {
        return this.values.fwdFrom
    }

    get viaBotId(): bigint {
        return this.values.viaBotId
    }

    get replyTo(): any {
        return this.values.replyTo
    }

    get date(): number {
        return this.values.date
    }

    get message(): string {
        return this.values.message
    }

    get media(): any {
        return this.values.media
    }

    get replyMarkup(): any {
        return this.values.replyMarkup
    }

    get entities(): Array<any> {
        return this.values.entities
    }

    get views(): number {
        return this.values.views
    }

    get forwards(): number {
        return this.values.forwards
    }

    get replies(): any {
        return this.values.replies
    }

    get editDate(): number {
        return this.values.editDate
    }

    get postAuthor(): string {
        return this.values.postAuthor
    }

    get groupedId(): bigint {
        return this.values.groupedId
    }

    get reactions(): any {
        return this.values.reactions
    }

    get restrictionReason(): Array<any> {
        return this.values.restrictionReason
    }

    get ttlPeriod(): number {
        return this.values.ttlPeriod
    }
}
