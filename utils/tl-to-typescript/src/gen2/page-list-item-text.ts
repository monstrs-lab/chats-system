import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageListItemTextValues {
    text: any;
}

export class PageListItemText extends TLConstructor<PageListItemTextValues> {
    static override CONSTRUCTOR_ID: number = 3106911949;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "text",
            "type": "RichText",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get text(): any {
        return this.values.text
    }
}
