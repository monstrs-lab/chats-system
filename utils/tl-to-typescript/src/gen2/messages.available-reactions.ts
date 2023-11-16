import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesAvailableReactionsValues {
    hash: number;
    reactions: Array<any>;
}

export class MessagesAvailableReactions extends TLConstructor<MessagesAvailableReactionsValues> {
    static override CONSTRUCTOR_ID: number = 1989032621;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
            "type": "int",
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
            "type": "AvailableReaction",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get hash(): number {
        return this.values.hash
    }

    get reactions(): Array<any> {
        return this.values.reactions
    }
}
