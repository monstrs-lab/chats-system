import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelValues {
    flags: any;
    creator: boolean;
    left: boolean;
    broadcast: boolean;
    verified: boolean;
    megagroup: boolean;
    restricted: boolean;
    signatures: boolean;
    min: boolean;
    scam: boolean;
    hasLink: boolean;
    hasGeo: boolean;
    slowmodeEnabled: boolean;
    callActive: boolean;
    callNotEmpty: boolean;
    fake: boolean;
    gigagroup: boolean;
    noforwards: boolean;
    joinToSend: boolean;
    joinRequest: boolean;
    forum: boolean;
    flags2: any;
    id: bigint;
    accessHash: bigint;
    title: string;
    username: string;
    photo: any;
    date: number;
    restrictionReason: Array<any>;
    adminRights: any;
    bannedRights: any;
    defaultBannedRights: any;
    participantsCount: number;
    usernames: Array<any>;
}

export class Channel extends TLConstructor<ChannelValues> {
    static override CONSTRUCTOR_ID: number = 2200278116;
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
            "name": "creator",
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
            "name": "left",
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
            "name": "broadcast",
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
            "name": "verified",
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
            "name": "megagroup",
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
            "name": "restricted",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "signatures",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "min",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "scam",
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
            "name": "has_link",
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
            "name": "has_geo",
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
            "name": "slowmode_enabled",
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
            "name": "call_active",
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
            "name": "call_not_empty",
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
            "name": "fake",
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
            "name": "gigagroup",
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
            "name": "noforwards",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 27,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "join_to_send",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 28,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "join_request",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 29,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "forum",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 30,
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
            "name": "access_hash",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 13,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "title",
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
            "name": "username",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "photo",
            "type": "ChatPhoto",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
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
            "name": "restriction_reason",
            "type": "RestrictionReason",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "admin_rights",
            "type": "ChatAdminRights",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "banned_rights",
            "type": "ChatBannedRights",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "default_banned_rights",
            "type": "ChatBannedRights",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 18,
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
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "usernames",
            "type": "Username",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 2,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get creator(): boolean {
        return this.values.creator
    }

    get left(): boolean {
        return this.values.left
    }

    get broadcast(): boolean {
        return this.values.broadcast
    }

    get verified(): boolean {
        return this.values.verified
    }

    get megagroup(): boolean {
        return this.values.megagroup
    }

    get restricted(): boolean {
        return this.values.restricted
    }

    get signatures(): boolean {
        return this.values.signatures
    }

    get min(): boolean {
        return this.values.min
    }

    get scam(): boolean {
        return this.values.scam
    }

    get hasLink(): boolean {
        return this.values.hasLink
    }

    get hasGeo(): boolean {
        return this.values.hasGeo
    }

    get slowmodeEnabled(): boolean {
        return this.values.slowmodeEnabled
    }

    get callActive(): boolean {
        return this.values.callActive
    }

    get callNotEmpty(): boolean {
        return this.values.callNotEmpty
    }

    get fake(): boolean {
        return this.values.fake
    }

    get gigagroup(): boolean {
        return this.values.gigagroup
    }

    get noforwards(): boolean {
        return this.values.noforwards
    }

    get joinToSend(): boolean {
        return this.values.joinToSend
    }

    get joinRequest(): boolean {
        return this.values.joinRequest
    }

    get forum(): boolean {
        return this.values.forum
    }

    get flags2(): any {
        return this.values.flags2
    }

    get id(): bigint {
        return this.values.id
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }

    get title(): string {
        return this.values.title
    }

    get username(): string {
        return this.values.username
    }

    get photo(): any {
        return this.values.photo
    }

    get date(): number {
        return this.values.date
    }

    get restrictionReason(): Array<any> {
        return this.values.restrictionReason
    }

    get adminRights(): any {
        return this.values.adminRights
    }

    get bannedRights(): any {
        return this.values.bannedRights
    }

    get defaultBannedRights(): any {
        return this.values.defaultBannedRights
    }

    get participantsCount(): number {
        return this.values.participantsCount
    }

    get usernames(): Array<any> {
        return this.values.usernames
    }
}
