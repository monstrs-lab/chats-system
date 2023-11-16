import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdatesTooLongValues {
}

export class UpdatesTooLong extends TLConstructor<UpdatesTooLongValues> {
    static override CONSTRUCTOR_ID: number = 3809980286;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
