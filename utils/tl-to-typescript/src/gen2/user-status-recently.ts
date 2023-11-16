import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UserStatusRecentlyValues {
}

export class UserStatusRecently extends TLConstructor<UserStatusRecentlyValues> {
    static override CONSTRUCTOR_ID: number = 3798942449;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
