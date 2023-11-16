import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthCodeTypeMissedCallValues {
}

export class AuthCodeTypeMissedCall extends TLConstructor<AuthCodeTypeMissedCallValues> {
    static override CONSTRUCTOR_ID: number = 3592083182;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
