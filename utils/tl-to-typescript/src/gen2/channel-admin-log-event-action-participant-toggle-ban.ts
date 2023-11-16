import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantToggleBanValues {
    prevParticipant: any;
    newParticipant: any;
}

export class ChannelAdminLogEventActionParticipantToggleBan extends TLConstructor<ChannelAdminLogEventActionParticipantToggleBanValues> {
    static override CONSTRUCTOR_ID: number = 3872931198;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_participant",
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
            "name": "new_participant",
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

    get prevParticipant(): any {
        return this.values.prevParticipant
    }

    get newParticipant(): any {
        return this.values.newParticipant
    }
}
