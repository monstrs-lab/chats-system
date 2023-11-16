import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputStickerSetEmojiDefaultStatusesValues {
}

export class InputStickerSetEmojiDefaultStatuses extends TLConstructor<InputStickerSetEmojiDefaultStatusesValues> {
    static override CONSTRUCTOR_ID: number = 701560302;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
