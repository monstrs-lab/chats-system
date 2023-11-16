import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthCodeTypeCallValues {
}

export class AuthCodeTypeCall extends TLConstructor<AuthCodeTypeCallValues> {
    static override CONSTRUCTOR_ID: number = 1948046307;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
