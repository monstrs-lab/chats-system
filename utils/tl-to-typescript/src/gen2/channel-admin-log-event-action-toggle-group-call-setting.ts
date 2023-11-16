import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionToggleGroupCallSettingValues {
    joinMuted: any;
}

export class ChannelAdminLogEventActionToggleGroupCallSetting extends TLConstructor<ChannelAdminLogEventActionToggleGroupCallSettingValues> {
    static override CONSTRUCTOR_ID: number = 1456906823;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "join_muted",
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

    get joinMuted(): any {
        return this.values.joinMuted
    }
}
