import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PasswordKdfAlgoUnknownValues {
}

export class PasswordKdfAlgoUnknown extends TLConstructor<PasswordKdfAlgoUnknownValues> {
    static override CONSTRUCTOR_ID: number = 3562713238;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
