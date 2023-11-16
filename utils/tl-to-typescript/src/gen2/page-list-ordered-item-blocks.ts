import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageListOrderedItemBlocksValues {
    num: string;
    blocks: Array<any>;
}

export class PageListOrderedItemBlocks extends TLConstructor<PageListOrderedItemBlocksValues> {
    static override CONSTRUCTOR_ID: number = 2564655414;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "num",
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
            "name": "blocks",
            "type": "PageBlock",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get num(): string {
        return this.values.num
    }

    get blocks(): Array<any> {
        return this.values.blocks
    }
}
