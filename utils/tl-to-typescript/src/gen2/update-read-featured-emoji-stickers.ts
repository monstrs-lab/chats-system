import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateReadFeaturedEmojiStickersValues {
}

export class UpdateReadFeaturedEmojiStickers extends TLConstructor<UpdateReadFeaturedEmojiStickersValues> {
    static override CONSTRUCTOR_ID: number = 4216080748;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
