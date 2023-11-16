import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ReactionCustomEmojiValues {
    documentId: bigint;
}

export class ReactionCustomEmoji extends TLConstructor<ReactionCustomEmojiValues> {
    static override CONSTRUCTOR_ID: number = 2302016627;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "document_id",
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

    get documentId(): bigint {
        return this.values.documentId
    }
}
