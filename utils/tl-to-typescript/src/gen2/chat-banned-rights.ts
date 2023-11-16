import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChatBannedRightsValues {
    flags: any;
    viewMessages: boolean;
    sendMessages: boolean;
    sendMedia: boolean;
    sendStickers: boolean;
    sendGifs: boolean;
    sendGames: boolean;
    sendInline: boolean;
    embedLinks: boolean;
    sendPolls: boolean;
    changeInfo: boolean;
    inviteUsers: boolean;
    pinMessages: boolean;
    manageTopics: boolean;
    sendPhotos: boolean;
    sendVideos: boolean;
    sendRoundvideos: boolean;
    sendAudios: boolean;
    sendVoices: boolean;
    sendDocs: boolean;
    sendPlain: boolean;
    untilDate: number;
}

export class ChatBannedRights extends TLConstructor<ChatBannedRightsValues> {
    static override CONSTRUCTOR_ID: number = 2668758040;
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
            "name": "view_messages",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_messages",
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
            "name": "send_media",
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
            "name": "send_stickers",
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
            "name": "send_gifs",
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
            "name": "send_games",
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
            "name": "send_inline",
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
            "name": "embed_links",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_polls",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "change_info",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "invite_users",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pin_messages",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "manage_topics",
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
            "name": "send_photos",
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
            "name": "send_videos",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 20,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_roundvideos",
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
            "name": "send_audios",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 22,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_voices",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 23,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "send_docs",
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
            "name": "send_plain",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 25,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "until_date",
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

    get flags(): any {
        return this.values.flags
    }

    get viewMessages(): boolean {
        return this.values.viewMessages
    }

    get sendMessages(): boolean {
        return this.values.sendMessages
    }

    get sendMedia(): boolean {
        return this.values.sendMedia
    }

    get sendStickers(): boolean {
        return this.values.sendStickers
    }

    get sendGifs(): boolean {
        return this.values.sendGifs
    }

    get sendGames(): boolean {
        return this.values.sendGames
    }

    get sendInline(): boolean {
        return this.values.sendInline
    }

    get embedLinks(): boolean {
        return this.values.embedLinks
    }

    get sendPolls(): boolean {
        return this.values.sendPolls
    }

    get changeInfo(): boolean {
        return this.values.changeInfo
    }

    get inviteUsers(): boolean {
        return this.values.inviteUsers
    }

    get pinMessages(): boolean {
        return this.values.pinMessages
    }

    get manageTopics(): boolean {
        return this.values.manageTopics
    }

    get sendPhotos(): boolean {
        return this.values.sendPhotos
    }

    get sendVideos(): boolean {
        return this.values.sendVideos
    }

    get sendRoundvideos(): boolean {
        return this.values.sendRoundvideos
    }

    get sendAudios(): boolean {
        return this.values.sendAudios
    }

    get sendVoices(): boolean {
        return this.values.sendVoices
    }

    get sendDocs(): boolean {
        return this.values.sendDocs
    }

    get sendPlain(): boolean {
        return this.values.sendPlain
    }

    get untilDate(): number {
        return this.values.untilDate
    }
}
