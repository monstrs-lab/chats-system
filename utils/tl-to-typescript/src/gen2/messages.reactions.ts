import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesReactionsValues {
    hash: bigint;
    reactions: Array<any>;
}

export class MessagesReactions extends TLConstructor<MessagesReactionsValues> {
    static override CONSTRUCTOR_ID: number = 3942512406;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "reactions",
            "type": "Reaction",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get hash(): bigint {
        return this.values.hash
    }

    get reactions(): Array<any> {
        return this.values.reactions
    }
}
