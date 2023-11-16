import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangeLocationValues {
    prevValue: any;
    newValue: any;
}

export class ChannelAdminLogEventActionChangeLocation extends TLConstructor<ChannelAdminLogEventActionChangeLocationValues> {
    static override CONSTRUCTOR_ID: number = 241923758;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_value",
            "type": "ChannelLocation",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_value",
            "type": "ChannelLocation",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get prevValue(): any {
        return this.values.prevValue
    }

    get newValue(): any {
        return this.values.newValue
    }
}
