import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateReadFeaturedStickersValues {
}

export class UpdateReadFeaturedStickers extends TLConstructor<UpdateReadFeaturedStickersValues> {
    static override CONSTRUCTOR_ID: number = 1461528386;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
