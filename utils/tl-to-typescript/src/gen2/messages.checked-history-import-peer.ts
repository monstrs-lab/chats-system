import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesCheckedHistoryImportPeerValues {
    confirmText: string;
}

export class MessagesCheckedHistoryImportPeer extends TLConstructor<MessagesCheckedHistoryImportPeerValues> {
    static override CONSTRUCTOR_ID: number = 2723014423;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "confirm_text",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get confirmText(): string {
        return this.values.confirmText
    }
}
