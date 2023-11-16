import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionGeoProximityReachedValues {
    fromId: any;
    toId: any;
    distance: number;
}

export class MessageActionGeoProximityReached extends TLConstructor<MessageActionGeoProximityReachedValues> {
    static override CONSTRUCTOR_ID: number = 2564871831;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "from_id",
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
            "name": "to_id",
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
            "name": "distance",
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

    get fromId(): any {
        return this.values.fromId
    }

    get toId(): any {
        return this.values.toId
    }

    get distance(): number {
        return this.values.distance
    }
}
