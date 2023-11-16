import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ReceivedNotifyMessageValues {
    id: number;
    flags: number;
}

export class ReceivedNotifyMessage extends TLConstructor<ReceivedNotifyMessageValues> {
    static override CONSTRUCTOR_ID: number = 2743383929;
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
          },
          {
            "name": "flags",
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

    get flags(): number {
        return this.values.flags
    }
}
