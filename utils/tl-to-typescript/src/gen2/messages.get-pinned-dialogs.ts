import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetPinnedDialogsValues {
    folderId: number;
}

export class MessagesGetPinnedDialogs extends TLMethod<MessagesGetPinnedDialogsValues> {
    static override CONSTRUCTOR_ID = 3602468338;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "folder_id",
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

    get folderId(): number {
        return this.values.folderId
    }
}
