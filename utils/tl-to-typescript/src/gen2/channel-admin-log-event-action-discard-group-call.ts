import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionDiscardGroupCallValues {
    call: any;
}

export class ChannelAdminLogEventActionDiscardGroupCall extends TLConstructor<ChannelAdminLogEventActionDiscardGroupCallValues> {
    static override CONSTRUCTOR_ID: number = 3684667712;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get call(): any {
        return this.values.call
    }
}
