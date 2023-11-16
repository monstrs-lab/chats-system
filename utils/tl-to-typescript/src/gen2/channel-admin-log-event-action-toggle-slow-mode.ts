import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionToggleSlowModeValues {
    prevValue: number;
    newValue: number;
}

export class ChannelAdminLogEventActionToggleSlowMode extends TLConstructor<ChannelAdminLogEventActionToggleSlowModeValues> {
    static override CONSTRUCTOR_ID: number = 1401984889;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_value",
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
            "name": "new_value",
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

    get prevValue(): number {
        return this.values.prevValue
    }

    get newValue(): number {
        return this.values.newValue
    }
}
