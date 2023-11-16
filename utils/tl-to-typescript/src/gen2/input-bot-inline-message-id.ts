import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputBotInlineMessageIDValues {
    dcId: number;
    id: bigint;
    accessHash: bigint;
}

export class InputBotInlineMessageID extends TLConstructor<InputBotInlineMessageIDValues> {
    static override CONSTRUCTOR_ID: number = 2299280777;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "dc_id",
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
            "name": "id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "access_hash",
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

    get dcId(): number {
        return this.values.dcId
    }

    get id(): bigint {
        return this.values.id
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }
}
