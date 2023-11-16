import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface UpdatesGetStateValues {
}

export class UpdatesGetState extends TLMethod<UpdatesGetStateValues> {
    static override CONSTRUCTOR_ID = 3990128682;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
