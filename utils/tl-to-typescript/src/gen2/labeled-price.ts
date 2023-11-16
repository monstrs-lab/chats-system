import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface LabeledPriceValues {
    label: string;
    amount: bigint;
}

export class LabeledPrice extends TLConstructor<LabeledPriceValues> {
    static override CONSTRUCTOR_ID: number = 3408489464;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "label",
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
          }
        ];

    get label(): string {
        return this.values.label
    }

    get amount(): bigint {
        return this.values.amount
    }
}
