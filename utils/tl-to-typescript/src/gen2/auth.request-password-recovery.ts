import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AuthRequestPasswordRecoveryValues {
}

export class AuthRequestPasswordRecovery extends TLMethod<AuthRequestPasswordRecoveryValues> {
    static override CONSTRUCTOR_ID = 3633822822;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
