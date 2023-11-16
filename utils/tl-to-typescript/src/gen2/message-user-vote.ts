import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageUserVoteValues {
    userId: bigint;
    option: Buffer;
    date: number;
}

export class MessageUserVote extends TLConstructor<MessageUserVoteValues> {
    static override CONSTRUCTOR_ID: number = 886196148;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "option",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "date",
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

    get userId(): bigint {
        return this.values.userId
    }

    get option(): Buffer {
        return this.values.option
    }

    get date(): number {
        return this.values.date
    }
}
