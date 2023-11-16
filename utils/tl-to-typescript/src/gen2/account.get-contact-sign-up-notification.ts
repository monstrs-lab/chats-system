import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface AccountGetContactSignUpNotificationValues {
}

export class AccountGetContactSignUpNotification extends TLMethod<AccountGetContactSignUpNotificationValues> {
    static override CONSTRUCTOR_ID = 2668087080;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
