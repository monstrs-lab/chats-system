import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypeEmailValues {
}

export class SecureValueTypeEmail extends TLConstructor<SecureValueTypeEmailValues> {
    static override CONSTRUCTOR_ID: number = 2386339822;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
