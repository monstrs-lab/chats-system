import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface TopPeerCategoryPeersValues {
    category: any;
    count: number;
    peers: Array<any>;
}

export class TopPeerCategoryPeers extends TLConstructor<TopPeerCategoryPeersValues> {
    static override CONSTRUCTOR_ID: number = 4219683473;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "category",
            "type": "TopPeerCategory",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "count",
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
            "name": "peers",
            "type": "TopPeer",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get category(): any {
        return this.values.category
    }

    get count(): number {
        return this.values.count
    }

    get peers(): Array<any> {
        return this.values.peers
    }
}
