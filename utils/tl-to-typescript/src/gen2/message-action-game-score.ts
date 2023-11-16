import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionGameScoreValues {
    gameId: bigint;
    score: number;
}

export class MessageActionGameScore extends TLConstructor<MessageActionGameScoreValues> {
    static override CONSTRUCTOR_ID: number = 2460428406;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "game_id",
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
            "name": "score",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get gameId(): bigint {
        return this.values.gameId
    }

    get score(): number {
        return this.values.score
    }
}
