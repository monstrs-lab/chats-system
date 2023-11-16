import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesSetDefaultReactionValues {
    reaction: any;
}

export class MessagesSetDefaultReaction extends TLMethod<MessagesSetDefaultReactionValues> {
    static override CONSTRUCTOR_ID = 1330094102;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "reaction",
            "type": "Reaction",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get reaction(): any {
        return this.values.reaction
    }
}
