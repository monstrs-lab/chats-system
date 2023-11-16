import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesTranslateResultValues {
    result: Array<any>;
}

export class MessagesTranslateResult extends TLConstructor<MessagesTranslateResultValues> {
    static override CONSTRUCTOR_ID: number = 870003448;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "result",
            "type": "TextWithEntities",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get result(): Array<any> {
        return this.values.result
    }
}
