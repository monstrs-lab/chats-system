import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionGiftPremiumValues {
    currency: string;
    amount: bigint;
    months: number;
}

export class MessageActionGiftPremium extends TLConstructor<MessageActionGiftPremiumValues> {
    static override CONSTRUCTOR_ID: number = 2879452614;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "currency",
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
            "name": "amount",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "months",
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

    get currency(): string {
        return this.values.currency
    }

    get amount(): bigint {
        return this.values.amount
    }

    get months(): number {
        return this.values.months
    }
}
