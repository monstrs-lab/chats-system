import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HighScoreValues {
    pos: number;
    userId: bigint;
    score: number;
}

export class HighScore extends TLConstructor<HighScoreValues> {
    static override CONSTRUCTOR_ID: number = 1940093419;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "pos",
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
            "name": "user_id",
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

    get pos(): number {
        return this.values.pos
    }

    get userId(): bigint {
        return this.values.userId
    }

    get score(): number {
        return this.values.score
    }
}
