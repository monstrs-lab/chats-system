import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface VectorValues {
}

export class Vector extends TLConstructor<VectorValues> {
    static override CONSTRUCTOR_ID: number = 481674261;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
