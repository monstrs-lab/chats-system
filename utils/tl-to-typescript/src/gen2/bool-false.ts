import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BoolFalseValues {
}

export class BoolFalse extends TLConstructor<BoolFalseValues> {
    static override CONSTRUCTOR_ID: number = 3162085175;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
