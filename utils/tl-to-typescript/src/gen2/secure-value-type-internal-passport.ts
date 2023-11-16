import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypeInternalPassportValues {
}

export class SecureValueTypeInternalPassport extends TLConstructor<SecureValueTypeInternalPassportValues> {
    static override CONSTRUCTOR_ID: number = 2577698595;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
