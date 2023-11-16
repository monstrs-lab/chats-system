import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputDialogPeerFolderValues {
    folderId: number;
}

export class InputDialogPeerFolder extends TLConstructor<InputDialogPeerFolderValues> {
    static override CONSTRUCTOR_ID: number = 1684014375;
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
