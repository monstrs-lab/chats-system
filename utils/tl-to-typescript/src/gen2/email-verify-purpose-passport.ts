import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmailVerifyPurposePassportValues {
}

export class EmailVerifyPurposePassport extends TLConstructor<EmailVerifyPurposePassportValues> {
    static override CONSTRUCTOR_ID: number = 3153401477;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
