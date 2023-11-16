import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypePhoneValues {
}

export class SecureValueTypePhone extends TLConstructor<SecureValueTypePhoneValues> {
    static override CONSTRUCTOR_ID: number = 3005262555;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
