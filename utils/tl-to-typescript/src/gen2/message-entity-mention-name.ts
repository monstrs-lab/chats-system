import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageEntityMentionNameValues {
    offset: number;
    length: number;
    userId: bigint;
}

export class MessageEntityMentionName extends TLConstructor<MessageEntityMentionNameValues> {
    static override CONSTRUCTOR_ID: number = 3699052864;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "offset",
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
            "name": "length",
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
          }
        ];

    get offset(): number {
        return this.values.offset
    }

    get length(): number {
        return this.values.length
    }

    get userId(): bigint {
        return this.values.userId
    }
}
