import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthCodeTypeSmsValues {
}

export class AuthCodeTypeSms extends TLConstructor<AuthCodeTypeSmsValues> {
    static override CONSTRUCTOR_ID: number = 1923290508;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
