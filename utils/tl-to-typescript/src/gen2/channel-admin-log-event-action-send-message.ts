import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionSendMessageValues {
    message: any;
}

export class ChannelAdminLogEventActionSendMessage extends TLConstructor<ChannelAdminLogEventActionSendMessageValues> {
    static override CONSTRUCTOR_ID: number = 663693416;
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
