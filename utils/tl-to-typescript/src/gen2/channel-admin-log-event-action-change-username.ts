import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangeUsernameValues {
    prevValue: string;
    newValue: string;
}

export class ChannelAdminLogEventActionChangeUsername extends TLConstructor<ChannelAdminLogEventActionChangeUsernameValues> {
    static override CONSTRUCTOR_ID: number = 1783299128;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_value",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_value",
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

    get prevValue(): string {
        return this.values.prevValue
    }

    get newValue(): string {
        return this.values.newValue
    }
}
