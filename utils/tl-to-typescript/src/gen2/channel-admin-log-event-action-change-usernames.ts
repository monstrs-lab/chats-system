import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangeUsernamesValues {
    prevValue: Array<string>;
    newValue: Array<string>;
}

export class ChannelAdminLogEventActionChangeUsernames extends TLConstructor<ChannelAdminLogEventActionChangeUsernamesValues> {
    static override CONSTRUCTOR_ID: number = 4031755177;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_value",
            "type": "string",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "new_value",
            "type": "string",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get prevValue(): Array<string> {
        return this.values.prevValue
    }

    get newValue(): Array<string> {
        return this.values.newValue
    }
}
