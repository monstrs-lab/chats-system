import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetEmojiGenericAnimationsValues {
}

export class InputStickerSetEmojiGenericAnimations extends TLConstructor<InputStickerSetEmojiGenericAnimationsValues> {
    static override CONSTRUCTOR_ID: number = 80008398;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
