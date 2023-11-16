import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountSavedRingtoneConvertedValues {
    document: any;
}

export class AccountSavedRingtoneConverted extends TLConstructor<AccountSavedRingtoneConvertedValues> {
    static override CONSTRUCTOR_ID: number = 523271863;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "document",
            "type": "Document",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get document(): any {
        return this.values.document
    }
}
