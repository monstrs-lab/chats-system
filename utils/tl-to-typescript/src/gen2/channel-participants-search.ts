import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelParticipantsSearchValues {
    q: string;
}

export class ChannelParticipantsSearch extends TLConstructor<ChannelParticipantsSearchValues> {
    static override CONSTRUCTOR_ID: number = 106343499;
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
