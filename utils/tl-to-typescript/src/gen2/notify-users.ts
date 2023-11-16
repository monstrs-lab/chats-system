import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NotifyUsersValues {
}

export class NotifyUsers extends TLConstructor<NotifyUsersValues> {
    static override CONSTRUCTOR_ID: number = 3033021260;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
