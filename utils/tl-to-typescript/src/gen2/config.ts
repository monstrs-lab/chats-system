import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ConfigValues {
    flags: any;
    phonecallsEnabled: boolean;
    defaultP2pContacts: boolean;
    preloadFeaturedStickers: boolean;
    ignorePhoneEntities: boolean;
    revokePmInbox: boolean;
    blockedMode: boolean;
    pfsEnabled: boolean;
    forceTryIpv6: boolean;
    date: number;
    expires: number;
    testMode: any;
    thisDc: number;
    dcOptions: Array<any>;
    dcTxtDomainName: string;
    chatSizeMax: number;
    megagroupSizeMax: number;
    forwardedCountMax: number;
    onlineUpdatePeriodMs: number;
    offlineBlurTimeoutMs: number;
    offlineIdleTimeoutMs: number;
    onlineCloudTimeoutMs: number;
    notifyCloudDelayMs: number;
    notifyDefaultDelayMs: number;
    pushChatPeriodMs: number;
    pushChatLimit: number;
    savedGifsLimit: number;
    editTimeLimit: number;
    revokeTimeLimit: number;
    revokePmTimeLimit: number;
    ratingEDecay: number;
    stickersRecentLimit: number;
    stickersFavedLimit: number;
    channelsReadMediaPeriod: number;
    tmpSessions: number;
    pinnedDialogsCountMax: number;
    pinnedInfolderCountMax: number;
    callReceiveTimeoutMs: number;
    callRingTimeoutMs: number;
    callConnectTimeoutMs: number;
    callPacketTimeoutMs: number;
    meUrlPrefix: string;
    autoupdateUrlPrefix: string;
    gifSearchUsername: string;
    venueSearchUsername: string;
    imgSearchUsername: string;
    staticMapsProvider: string;
    captionLengthMax: number;
    messageLengthMax: number;
    webfileDcId: number;
    suggestedLangCode: string;
    langPackVersion: number;
    baseLangPackVersion: number;
    reactionsDefault: any;
}

export class Config extends TLConstructor<ConfigValues> {
    static override CONSTRUCTOR_ID: number = 589653676;
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
            "name": "phonecalls_enabled",
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
            "name": "default_p2p_contacts",
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
            "name": "preload_featured_stickers",
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
            "name": "ignore_phone_entities",
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
            "name": "revoke_pm_inbox",
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
            "name": "blocked_mode",
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
            "name": "pfs_enabled",
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
            "name": "force_try_ipv6",
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
            "name": "expires",
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
            "name": "test_mode",
            "type": "Bool",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "this_dc",
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
            "name": "dc_options",
            "type": "DcOption",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "dc_txt_domain_name",
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
            "name": "chat_size_max",
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
            "name": "megagroup_size_max",
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
            "name": "forwarded_count_max",
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
            "name": "online_update_period_ms",
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
            "name": "offline_blur_timeout_ms",
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
            "name": "offline_idle_timeout_ms",
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
            "name": "online_cloud_timeout_ms",
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
            "name": "notify_cloud_delay_ms",
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
            "name": "notify_default_delay_ms",
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
            "name": "push_chat_period_ms",
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
            "name": "push_chat_limit",
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
            "name": "saved_gifs_limit",
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
            "name": "edit_time_limit",
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
            "name": "revoke_time_limit",
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
            "name": "revoke_pm_time_limit",
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
            "name": "rating_e_decay",
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
            "name": "stickers_recent_limit",
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
            "name": "stickers_faved_limit",
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
            "name": "channels_read_media_period",
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
            "name": "tmp_sessions",
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
            "name": "pinned_dialogs_count_max",
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
            "name": "pinned_infolder_count_max",
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
            "name": "call_receive_timeout_ms",
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
            "name": "call_ring_timeout_ms",
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
            "name": "call_connect_timeout_ms",
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
            "name": "call_packet_timeout_ms",
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
            "name": "me_url_prefix",
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
            "name": "autoupdate_url_prefix",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "gif_search_username",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "venue_search_username",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "img_search_username",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "static_maps_provider",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "caption_length_max",
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
            "name": "message_length_max",
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
            "name": "webfile_dc_id",
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
            "name": "suggested_lang_code",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "lang_pack_version",
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
            "name": "base_lang_pack_version",
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
            "name": "reactions_default",
            "type": "Reaction",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get phonecallsEnabled(): boolean {
        return this.values.phonecallsEnabled
    }

    get defaultP2pContacts(): boolean {
        return this.values.defaultP2pContacts
    }

    get preloadFeaturedStickers(): boolean {
        return this.values.preloadFeaturedStickers
    }

    get ignorePhoneEntities(): boolean {
        return this.values.ignorePhoneEntities
    }

    get revokePmInbox(): boolean {
        return this.values.revokePmInbox
    }

    get blockedMode(): boolean {
        return this.values.blockedMode
    }

    get pfsEnabled(): boolean {
        return this.values.pfsEnabled
    }

    get forceTryIpv6(): boolean {
        return this.values.forceTryIpv6
    }

    get date(): number {
        return this.values.date
    }

    get expires(): number {
        return this.values.expires
    }

    get testMode(): any {
        return this.values.testMode
    }

    get thisDc(): number {
        return this.values.thisDc
    }

    get dcOptions(): Array<any> {
        return this.values.dcOptions
    }

    get dcTxtDomainName(): string {
        return this.values.dcTxtDomainName
    }

    get chatSizeMax(): number {
        return this.values.chatSizeMax
    }

    get megagroupSizeMax(): number {
        return this.values.megagroupSizeMax
    }

    get forwardedCountMax(): number {
        return this.values.forwardedCountMax
    }

    get onlineUpdatePeriodMs(): number {
        return this.values.onlineUpdatePeriodMs
    }

    get offlineBlurTimeoutMs(): number {
        return this.values.offlineBlurTimeoutMs
    }

    get offlineIdleTimeoutMs(): number {
        return this.values.offlineIdleTimeoutMs
    }

    get onlineCloudTimeoutMs(): number {
        return this.values.onlineCloudTimeoutMs
    }

    get notifyCloudDelayMs(): number {
        return this.values.notifyCloudDelayMs
    }

    get notifyDefaultDelayMs(): number {
        return this.values.notifyDefaultDelayMs
    }

    get pushChatPeriodMs(): number {
        return this.values.pushChatPeriodMs
    }

    get pushChatLimit(): number {
        return this.values.pushChatLimit
    }

    get savedGifsLimit(): number {
        return this.values.savedGifsLimit
    }

    get editTimeLimit(): number {
        return this.values.editTimeLimit
    }

    get revokeTimeLimit(): number {
        return this.values.revokeTimeLimit
    }

    get revokePmTimeLimit(): number {
        return this.values.revokePmTimeLimit
    }

    get ratingEDecay(): number {
        return this.values.ratingEDecay
    }

    get stickersRecentLimit(): number {
        return this.values.stickersRecentLimit
    }

    get stickersFavedLimit(): number {
        return this.values.stickersFavedLimit
    }

    get channelsReadMediaPeriod(): number {
        return this.values.channelsReadMediaPeriod
    }

    get tmpSessions(): number {
        return this.values.tmpSessions
    }

    get pinnedDialogsCountMax(): number {
        return this.values.pinnedDialogsCountMax
    }

    get pinnedInfolderCountMax(): number {
        return this.values.pinnedInfolderCountMax
    }

    get callReceiveTimeoutMs(): number {
        return this.values.callReceiveTimeoutMs
    }

    get callRingTimeoutMs(): number {
        return this.values.callRingTimeoutMs
    }

    get callConnectTimeoutMs(): number {
        return this.values.callConnectTimeoutMs
    }

    get callPacketTimeoutMs(): number {
        return this.values.callPacketTimeoutMs
    }

    get meUrlPrefix(): string {
        return this.values.meUrlPrefix
    }

    get autoupdateUrlPrefix(): string {
        return this.values.autoupdateUrlPrefix
    }

    get gifSearchUsername(): string {
        return this.values.gifSearchUsername
    }

    get venueSearchUsername(): string {
        return this.values.venueSearchUsername
    }

    get imgSearchUsername(): string {
        return this.values.imgSearchUsername
    }

    get staticMapsProvider(): string {
        return this.values.staticMapsProvider
    }

    get captionLengthMax(): number {
        return this.values.captionLengthMax
    }

    get messageLengthMax(): number {
        return this.values.messageLengthMax
    }

    get webfileDcId(): number {
        return this.values.webfileDcId
    }

    get suggestedLangCode(): string {
        return this.values.suggestedLangCode
    }

    get langPackVersion(): number {
        return this.values.langPackVersion
    }

    get baseLangPackVersion(): number {
        return this.values.baseLangPackVersion
    }

    get reactionsDefault(): any {
        return this.values.reactionsDefault
    }
}
