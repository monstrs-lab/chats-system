import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelsChannelParticipantValues {
    participant: any;
    chats: Array<any>;
    users: Array<any>;
}

export class ChannelsChannelParticipant extends TLConstructor<ChannelsChannelParticipantValues> {
    static override CONSTRUCTOR_ID: number = 3753378583;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "participant",
            "type": "ChannelParticipant",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "chats",
            "type": "Chat",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "users",
            "type": "User",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get participant(): any {
        return this.values.participant
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get users(): Array<any> {
        return this.values.users
    }
}
