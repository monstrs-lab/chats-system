import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BoolTrueValues {
}

export class BoolTrue extends TLConstructor<BoolTrueValues> {
    static override CONSTRUCTOR_ID: number = 2574415285;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
