import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypePassportValues {
}

export class SecureValueTypePassport extends TLConstructor<SecureValueTypePassportValues> {
    static override CONSTRUCTOR_ID: number = 1034709504;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
