import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantInviteValues {
    participant: any;
}

export class ChannelAdminLogEventActionParticipantInvite extends TLConstructor<ChannelAdminLogEventActionParticipantInviteValues> {
    static override CONSTRUCTOR_ID: number = 3810276568;
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
          }
        ];

    get participant(): any {
        return this.values.participant
    }
}
