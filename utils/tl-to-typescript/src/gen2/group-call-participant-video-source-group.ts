import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface GroupCallParticipantVideoSourceGroupValues {
    semantics: string;
    sources: Array<number>;
}

export class GroupCallParticipantVideoSourceGroup extends TLConstructor<GroupCallParticipantVideoSourceGroupValues> {
    static override CONSTRUCTOR_ID: number = 3702593719;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "semantics",
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
            "name": "sources",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get semantics(): string {
        return this.values.semantics
    }

    get sources(): Array<number> {
        return this.values.sources
    }
}
