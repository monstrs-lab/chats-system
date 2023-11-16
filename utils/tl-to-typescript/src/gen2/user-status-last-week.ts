import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UserStatusLastWeekValues {
}

export class UserStatusLastWeek extends TLConstructor<UserStatusLastWeekValues> {
    static override CONSTRUCTOR_ID: number = 129960444;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
