import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface RestrictionReasonValues {
    platform: string;
    reason: string;
    text: string;
}

export class RestrictionReason extends TLConstructor<RestrictionReasonValues> {
    static override CONSTRUCTOR_ID: number = 3497176244;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "platform",
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
            "name": "reason",
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
            "name": "text",
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

    get platform(): string {
        return this.values.platform
    }

    get reason(): string {
        return this.values.reason
    }

    get text(): string {
        return this.values.text
    }
}
