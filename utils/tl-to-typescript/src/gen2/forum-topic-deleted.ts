import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ForumTopicDeletedValues {
    id: number;
}

export class ForumTopicDeleted extends TLConstructor<ForumTopicDeletedValues> {
    static override CONSTRUCTOR_ID: number = 37687451;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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

    get id(): number {
        return this.values.id
    }
}
