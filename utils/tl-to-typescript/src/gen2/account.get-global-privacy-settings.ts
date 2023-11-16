import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetGlobalPrivacySettingsValues {
}

export class AccountGetGlobalPrivacySettings extends TLMethod<AccountGetGlobalPrivacySettingsValues> {
    static override CONSTRUCTOR_ID = 3945483510;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
