import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelParticipantsKickedValues {
    q: string;
}

export class ChannelParticipantsKicked extends TLConstructor<ChannelParticipantsKickedValues> {
    static override CONSTRUCTOR_ID: number = 2746567045;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "q",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get q(): string {
        return this.values.q
    }
}
