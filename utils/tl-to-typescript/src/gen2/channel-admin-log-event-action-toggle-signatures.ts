import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionToggleSignaturesValues {
    newValue: any;
}

export class ChannelAdminLogEventActionToggleSignatures extends TLConstructor<ChannelAdminLogEventActionToggleSignaturesValues> {
    static override CONSTRUCTOR_ID: number = 648939889;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "new_value",
            "type": "Bool",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get newValue(): any {
        return this.values.newValue
    }
}
