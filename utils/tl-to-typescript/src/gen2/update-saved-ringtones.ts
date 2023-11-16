import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateSavedRingtonesValues {
}

export class UpdateSavedRingtones extends TLConstructor<UpdateSavedRingtonesValues> {
    static override CONSTRUCTOR_ID: number = 1960361625;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
