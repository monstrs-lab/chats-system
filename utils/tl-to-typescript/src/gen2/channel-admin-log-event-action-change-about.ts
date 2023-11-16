import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangeAboutValues {
    prevValue: string;
    newValue: string;
}

export class ChannelAdminLogEventActionChangeAbout extends TLConstructor<ChannelAdminLogEventActionChangeAboutValues> {
    static override CONSTRUCTOR_ID: number = 1427671598;
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
