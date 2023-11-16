import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetPasswordValues {
}

export class AccountGetPassword extends TLMethod<AccountGetPasswordValues> {
    static override CONSTRUCTOR_ID = 1418342645;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
