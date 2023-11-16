import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantUnmuteValues {
    participant: any;
}

export class ChannelAdminLogEventActionParticipantUnmute extends TLConstructor<ChannelAdminLogEventActionParticipantUnmuteValues> {
    static override CONSTRUCTOR_ID: number = 3863226816;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "participant",
            "type": "GroupCallParticipant",
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
