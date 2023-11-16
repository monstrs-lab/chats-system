import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountResetPasswordOkValues {
}

export class AccountResetPasswordOk extends TLConstructor<AccountResetPasswordOkValues> {
    static override CONSTRUCTOR_ID: number = 3911636542;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
