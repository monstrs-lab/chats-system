import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountSavedRingtoneValues {
}

export class AccountSavedRingtone extends TLConstructor<AccountSavedRingtoneValues> {
    static override CONSTRUCTOR_ID: number = 3072737133;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
