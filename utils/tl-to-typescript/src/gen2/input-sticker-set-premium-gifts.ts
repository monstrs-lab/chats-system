import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetPremiumGiftsValues {
}

export class InputStickerSetPremiumGifts extends TLConstructor<InputStickerSetPremiumGiftsValues> {
    static override CONSTRUCTOR_ID: number = 3364567810;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
