import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesStickersNotModifiedValues {
}

export class MessagesStickersNotModified extends TLConstructor<MessagesStickersNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 4050950690;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
