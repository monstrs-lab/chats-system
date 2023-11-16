import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantJoinByInviteValues {
    invite: any;
}

export class ChannelAdminLogEventActionParticipantJoinByInvite extends TLConstructor<ChannelAdminLogEventActionParticipantJoinByInviteValues> {
    static override CONSTRUCTOR_ID: number = 1557846647;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "invite",
            "type": "ExportedChatInvite",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get invite(): any {
        return this.values.invite
    }
}
