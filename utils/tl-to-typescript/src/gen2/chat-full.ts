import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChatFullValues {
    flags: any;
    canSetUsername: boolean;
    hasScheduled: boolean;
    translationsDisabled: boolean;
    id: bigint;
    about: string;
    participants: any;
    chatPhoto: any;
    notifySettings: any;
    exportedInvite: any;
    botInfo: Array<any>;
    pinnedMsgId: number;
    folderId: number;
    call: any;
    ttlPeriod: number;
    groupcallDefaultJoinAs: any;
    themeEmoticon: string;
    requestsPending: number;
    recentRequesters: Array<bigint>;
    availableReactions: any;
}

export class ChatFull extends TLConstructor<ChatFullValues> {
    static override CONSTRUCTOR_ID: number = 3386052920;
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
            "name": "can_set_username",
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
            "name": "has_scheduled",
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
            "name": "translations_disabled",
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
            "name": "id",
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
            "name": "about",
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
            "name": "participants",
            "type": "ChatParticipants",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chat_photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "notify_settings",
            "type": "PeerNotifySettings",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "exported_invite",
            "type": "ExportedChatInvite",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 13,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "bot_info",
            "type": "BotInfo",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "pinned_msg_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "folder_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "ttl_period",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "groupcall_default_join_as",
            "type": "Peer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "theme_emoticon",
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
            "name": "requests_pending",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "recent_requesters",
            "type": "long",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "available_reactions",
            "type": "ChatReactions",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 18,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get canSetUsername(): boolean {
        return this.values.canSetUsername
    }

    get hasScheduled(): boolean {
        return this.values.hasScheduled
    }

    get translationsDisabled(): boolean {
        return this.values.translationsDisabled
    }

    get id(): bigint {
        return this.values.id
    }

    get about(): string {
        return this.values.about
    }

    get participants(): any {
        return this.values.participants
    }

    get chatPhoto(): any {
        return this.values.chatPhoto
    }

    get notifySettings(): any {
        return this.values.notifySettings
    }

    get exportedInvite(): any {
        return this.values.exportedInvite
    }

    get botInfo(): Array<any> {
        return this.values.botInfo
    }

    get pinnedMsgId(): number {
        return this.values.pinnedMsgId
    }

    get folderId(): number {
        return this.values.folderId
    }

    get call(): any {
        return this.values.call
    }

    get ttlPeriod(): number {
        return this.values.ttlPeriod
    }

    get groupcallDefaultJoinAs(): any {
        return this.values.groupcallDefaultJoinAs
    }

    get themeEmoticon(): string {
        return this.values.themeEmoticon
    }

    get requestsPending(): number {
        return this.values.requestsPending
    }

    get recentRequesters(): Array<bigint> {
        return this.values.recentRequesters
    }

    get availableReactions(): any {
        return this.values.availableReactions
    }
}
