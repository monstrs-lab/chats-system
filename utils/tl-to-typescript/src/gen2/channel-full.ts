import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelFullValues {
    flags: any;
    canViewParticipants: boolean;
    canSetUsername: boolean;
    canSetStickers: boolean;
    hiddenPrehistory: boolean;
    canSetLocation: boolean;
    hasScheduled: boolean;
    canViewStats: boolean;
    blocked: boolean;
    flags2: any;
    canDeleteChannel: boolean;
    antispam: boolean;
    participantsHidden: boolean;
    translationsDisabled: boolean;
    id: bigint;
    about: string;
    participantsCount: number;
    adminsCount: number;
    kickedCount: number;
    bannedCount: number;
    onlineCount: number;
    readInboxMaxId: number;
    readOutboxMaxId: number;
    unreadCount: number;
    chatPhoto: any;
    notifySettings: any;
    exportedInvite: any;
    botInfo: Array<any>;
    migratedFromChatId: bigint;
    migratedFromMaxId: number;
    pinnedMsgId: number;
    stickerset: any;
    availableMinId: number;
    folderId: number;
    linkedChatId: bigint;
    location: any;
    slowmodeSeconds: number;
    slowmodeNextSendDate: number;
    statsDc: number;
    pts: number;
    call: any;
    ttlPeriod: number;
    pendingSuggestions: Array<string>;
    groupcallDefaultJoinAs: any;
    themeEmoticon: string;
    requestsPending: number;
    recentRequesters: Array<bigint>;
    defaultSendAs: any;
    availableReactions: any;
}

export class ChannelFull extends TLConstructor<ChannelFullValues> {
    static override CONSTRUCTOR_ID: number = 4063581447;
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
            "name": "can_view_participants",
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
            "name": "can_set_username",
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
            "name": "can_set_stickers",
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
            "name": "hidden_prehistory",
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
            "name": "can_set_location",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 16,
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
            "flagIndex": 19,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "can_view_stats",
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
            "name": "blocked",
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
            "name": "flags2",
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
            "name": "can_delete_channel",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 2,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "antispam",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 2,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "participants_hidden",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 2,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "translations_disabled",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 2,
            "flagIndex": 3,
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
            "name": "participants_count",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "admins_count",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "kicked_count",
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
            "name": "banned_count",
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
            "name": "online_count",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 13,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "read_inbox_max_id",
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
            "name": "read_outbox_max_id",
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
            "name": "unread_count",
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
            "name": "chat_photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
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
            "flagIndex": 23,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "bot_info",
            "type": "BotInfo",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "migrated_from_chat_id",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "migrated_from_max_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pinned_msg_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "stickerset",
            "type": "StickerSet",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "available_min_id",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
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
            "name": "linked_chat_id",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "location",
            "type": "ChannelLocation",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "slowmode_seconds",
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
            "name": "slowmode_next_send_date",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 18,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "stats_dc",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pts",
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
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 21,
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
            "flagIndex": 24,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "pending_suggestions",
            "type": "string",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 25,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "groupcall_default_join_as",
            "type": "Peer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 26,
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
            "flagIndex": 27,
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
            "flagIndex": 28,
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
            "flagIndex": 28,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "default_send_as",
            "type": "Peer",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 29,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "available_reactions",
            "type": "ChatReactions",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 30,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get canViewParticipants(): boolean {
        return this.values.canViewParticipants
    }

    get canSetUsername(): boolean {
        return this.values.canSetUsername
    }

    get canSetStickers(): boolean {
        return this.values.canSetStickers
    }

    get hiddenPrehistory(): boolean {
        return this.values.hiddenPrehistory
    }

    get canSetLocation(): boolean {
        return this.values.canSetLocation
    }

    get hasScheduled(): boolean {
        return this.values.hasScheduled
    }

    get canViewStats(): boolean {
        return this.values.canViewStats
    }

    get blocked(): boolean {
        return this.values.blocked
    }

    get flags2(): any {
        return this.values.flags2
    }

    get canDeleteChannel(): boolean {
        return this.values.canDeleteChannel
    }

    get antispam(): boolean {
        return this.values.antispam
    }

    get participantsHidden(): boolean {
        return this.values.participantsHidden
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

    get participantsCount(): number {
        return this.values.participantsCount
    }

    get adminsCount(): number {
        return this.values.adminsCount
    }

    get kickedCount(): number {
        return this.values.kickedCount
    }

    get bannedCount(): number {
        return this.values.bannedCount
    }

    get onlineCount(): number {
        return this.values.onlineCount
    }

    get readInboxMaxId(): number {
        return this.values.readInboxMaxId
    }

    get readOutboxMaxId(): number {
        return this.values.readOutboxMaxId
    }

    get unreadCount(): number {
        return this.values.unreadCount
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

    get migratedFromChatId(): bigint {
        return this.values.migratedFromChatId
    }

    get migratedFromMaxId(): number {
        return this.values.migratedFromMaxId
    }

    get pinnedMsgId(): number {
        return this.values.pinnedMsgId
    }

    get stickerset(): any {
        return this.values.stickerset
    }

    get availableMinId(): number {
        return this.values.availableMinId
    }

    get folderId(): number {
        return this.values.folderId
    }

    get linkedChatId(): bigint {
        return this.values.linkedChatId
    }

    get location(): any {
        return this.values.location
    }

    get slowmodeSeconds(): number {
        return this.values.slowmodeSeconds
    }

    get slowmodeNextSendDate(): number {
        return this.values.slowmodeNextSendDate
    }

    get statsDc(): number {
        return this.values.statsDc
    }

    get pts(): number {
        return this.values.pts
    }

    get call(): any {
        return this.values.call
    }

    get ttlPeriod(): number {
        return this.values.ttlPeriod
    }

    get pendingSuggestions(): Array<string> {
        return this.values.pendingSuggestions
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

    get defaultSendAs(): any {
        return this.values.defaultSendAs
    }

    get availableReactions(): any {
        return this.values.availableReactions
    }
}
