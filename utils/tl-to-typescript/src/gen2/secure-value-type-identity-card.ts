import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypeIdentityCardValues {
}

export class SecureValueTypeIdentityCard extends TLConstructor<SecureValueTypeIdentityCardValues> {
    static override CONSTRUCTOR_ID: number = 2698015819;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
