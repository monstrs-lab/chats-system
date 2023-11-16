import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface EmojiStatusEmptyValues {
}

export class EmojiStatusEmpty extends TLConstructor<EmojiStatusEmptyValues> {
    static override CONSTRUCTOR_ID: number = 769727150;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
