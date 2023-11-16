import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetContentSettingsValues {
}

export class AccountGetContentSettings extends TLMethod<AccountGetContentSettingsValues> {
    static override CONSTRUCTOR_ID = 2342210990;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
