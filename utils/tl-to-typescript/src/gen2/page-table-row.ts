import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageTableRowValues {
    cells: Array<any>;
}

export class PageTableRow extends TLConstructor<PageTableRowValues> {
    static override CONSTRUCTOR_ID: number = 3770729957;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "cells",
            "type": "PageTableCell",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get cells(): Array<any> {
        return this.values.cells
    }
}
