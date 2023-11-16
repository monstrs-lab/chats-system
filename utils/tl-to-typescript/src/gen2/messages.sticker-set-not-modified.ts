import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesStickerSetNotModifiedValues {
}

export class MessagesStickerSetNotModified extends TLConstructor<MessagesStickerSetNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 3556320491;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
