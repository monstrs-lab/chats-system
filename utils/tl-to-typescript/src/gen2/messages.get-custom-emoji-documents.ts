import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetCustomEmojiDocumentsValues {
    documentId: Array<bigint>;
}

export class MessagesGetCustomEmojiDocuments extends TLMethod<MessagesGetCustomEmojiDocumentsValues> {
    static override CONSTRUCTOR_ID = 3651866452;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "document_id",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get documentId(): Array<bigint> {
        return this.values.documentId
    }
}
