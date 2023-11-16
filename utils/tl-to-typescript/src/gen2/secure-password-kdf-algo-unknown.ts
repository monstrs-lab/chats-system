import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecurePasswordKdfAlgoUnknownValues {
}

export class SecurePasswordKdfAlgoUnknown extends TLConstructor<SecurePasswordKdfAlgoUnknownValues> {
    static override CONSTRUCTOR_ID: number = 4883767;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
