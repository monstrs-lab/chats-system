import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SponsoredMessageValues {
    flags: any;
    recommended: boolean;
    showPeerPhoto: boolean;
    randomId: Buffer;
    fromId: any;
    chatInvite: any;
    chatInviteHash: string;
    channelPost: number;
    startParam: string;
    message: string;
    entities: Array<any>;
}

export class SponsoredMessage extends TLConstructor<SponsoredMessageValues> {
    static override CONSTRUCTOR_ID: number = 981691896;
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
            "name": "recommended",
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
            "name": "show_peer_photo",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "random_id",
            "type": "bytes",
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
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chat_invite",
            "type": "ChatInvite",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chat_invite_hash",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "channel_post",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "start_param",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
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
            "name": "entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get recommended(): boolean {
        return this.values.recommended
    }

    get showPeerPhoto(): boolean {
        return this.values.showPeerPhoto
    }

    get randomId(): Buffer {
        return this.values.randomId
    }

    get fromId(): any {
        return this.values.fromId
    }

    get chatInvite(): any {
        return this.values.chatInvite
    }

    get chatInviteHash(): string {
        return this.values.chatInviteHash
    }

    get channelPost(): number {
        return this.values.channelPost
    }

    get startParam(): string {
        return this.values.startParam
    }

    get message(): string {
        return this.values.message
    }

    get entities(): Array<any> {
        return this.values.entities
    }
}
