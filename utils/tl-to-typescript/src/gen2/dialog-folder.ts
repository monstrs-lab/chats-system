import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DialogFolderValues {
    flags: any;
    pinned: boolean;
    folder: any;
    peer: any;
    topMessage: number;
    unreadMutedPeersCount: number;
    unreadUnmutedPeersCount: number;
    unreadMutedMessagesCount: number;
    unreadUnmutedMessagesCount: number;
}

export class DialogFolder extends TLConstructor<DialogFolderValues> {
    static override CONSTRUCTOR_ID: number = 1908216652;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "pinned",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "folder",
            "type": "Folder",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "peer",
            "type": "Peer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "top_message",
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
            "name": "unread_muted_peers_count",
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
            "name": "unread_unmuted_peers_count",
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
            "name": "unread_muted_messages_count",
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
            "name": "unread_unmuted_messages_count",
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

    get flags(): any {
        return this.values.flags
    }

    get pinned(): boolean {
        return this.values.pinned
    }

    get folder(): any {
        return this.values.folder
    }

    get peer(): any {
        return this.values.peer
    }

    get topMessage(): number {
        return this.values.topMessage
    }

    get unreadMutedPeersCount(): number {
        return this.values.unreadMutedPeersCount
    }

    get unreadUnmutedPeersCount(): number {
        return this.values.unreadUnmutedPeersCount
    }

    get unreadMutedMessagesCount(): number {
        return this.values.unreadMutedMessagesCount
    }

    get unreadUnmutedMessagesCount(): number {
        return this.values.unreadUnmutedMessagesCount
    }
}
