import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetDialogFiltersValues {
}

export class MessagesGetDialogFilters extends TLMethod<MessagesGetDialogFiltersValues> {
    static override CONSTRUCTOR_ID = 4053719405;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
