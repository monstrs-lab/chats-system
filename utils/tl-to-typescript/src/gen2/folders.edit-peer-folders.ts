import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface FoldersEditPeerFoldersValues {
    folderPeers: Array<any>;
}

export class FoldersEditPeerFolders extends TLMethod<FoldersEditPeerFoldersValues> {
    static override CONSTRUCTOR_ID = 1749536939;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "folder_peers",
            "type": "InputFolderPeer",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get folderPeers(): Array<any> {
        return this.values.folderPeers
    }
}
