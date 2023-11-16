import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateFavedStickersValues {
}

export class UpdateFavedStickers extends TLConstructor<UpdateFavedStickersValues> {
    static override CONSTRUCTOR_ID: number = 3843135853;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
