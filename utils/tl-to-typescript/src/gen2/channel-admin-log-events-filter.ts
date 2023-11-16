import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventsFilterValues {
    flags: any;
    join: boolean;
    leave: boolean;
    invite: boolean;
    ban: boolean;
    unban: boolean;
    kick: boolean;
    unkick: boolean;
    promote: boolean;
    demote: boolean;
    info: boolean;
    settings: boolean;
    pinned: boolean;
    edit: boolean;
    delete: boolean;
    groupCall: boolean;
    invites: boolean;
    send: boolean;
    forums: boolean;
}

export class ChannelAdminLogEventsFilter extends TLConstructor<ChannelAdminLogEventsFilterValues> {
    static override CONSTRUCTOR_ID: number = 3926948580;
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
            "name": "join",
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
            "name": "leave",
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
            "name": "invite",
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
            "name": "ban",
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
            "name": "unban",
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
            "name": "kick",
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
            "name": "unkick",
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
            "name": "promote",
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
            "name": "demote",
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
            "name": "info",
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
            "name": "settings",
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
            "name": "pinned",
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
            "name": "edit",
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
            "name": "delete",
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
            "name": "group_call",
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
            "name": "invites",
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
            "name": "send",
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
            "name": "forums",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 17,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get join(): boolean {
        return this.values.join
    }

    get leave(): boolean {
        return this.values.leave
    }

    get invite(): boolean {
        return this.values.invite
    }

    get ban(): boolean {
        return this.values.ban
    }

    get unban(): boolean {
        return this.values.unban
    }

    get kick(): boolean {
        return this.values.kick
    }

    get unkick(): boolean {
        return this.values.unkick
    }

    get promote(): boolean {
        return this.values.promote
    }

    get demote(): boolean {
        return this.values.demote
    }

    get info(): boolean {
        return this.values.info
    }

    get settings(): boolean {
        return this.values.settings
    }

    get pinned(): boolean {
        return this.values.pinned
    }

    get edit(): boolean {
        return this.values.edit
    }

    get delete(): boolean {
        return this.values.delete
    }

    get groupCall(): boolean {
        return this.values.groupCall
    }

    get invites(): boolean {
        return this.values.invites
    }

    get send(): boolean {
        return this.values.send
    }

    get forums(): boolean {
        return this.values.forums
    }
}
