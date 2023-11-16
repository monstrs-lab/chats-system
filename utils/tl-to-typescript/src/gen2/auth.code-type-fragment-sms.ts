import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AuthCodeTypeFragmentSmsValues {
}

export class AuthCodeTypeFragmentSms extends TLConstructor<AuthCodeTypeFragmentSmsValues> {
    static override CONSTRUCTOR_ID: number = 116234636;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
