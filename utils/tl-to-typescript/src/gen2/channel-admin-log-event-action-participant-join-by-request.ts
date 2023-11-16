import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantJoinByRequestValues {
    invite: any;
    approvedBy: bigint;
}

export class ChannelAdminLogEventActionParticipantJoinByRequest extends TLConstructor<ChannelAdminLogEventActionParticipantJoinByRequestValues> {
    static override CONSTRUCTOR_ID: number = 2947945546;
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
          },
          {
            "name": "approved_by",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get invite(): any {
        return this.values.invite
    }

    get approvedBy(): bigint {
        return this.values.approvedBy
    }
}
