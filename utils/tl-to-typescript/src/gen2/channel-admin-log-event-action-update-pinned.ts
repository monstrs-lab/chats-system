import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionUpdatePinnedValues {
    message: any;
}

export class ChannelAdminLogEventActionUpdatePinned extends TLConstructor<ChannelAdminLogEventActionUpdatePinnedValues> {
    static override CONSTRUCTOR_ID: number = 3924306968;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "message",
            "type": "Message",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get message(): any {
        return this.values.message
    }
}
