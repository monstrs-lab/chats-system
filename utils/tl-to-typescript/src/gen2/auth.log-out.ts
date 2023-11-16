import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthLogOutValues {
}

export class AuthLogOut extends TLMethod<AuthLogOutValues> {
    static override CONSTRUCTOR_ID = 1047706137;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
