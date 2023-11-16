import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesRecentStickersNotModifiedValues {
}

export class MessagesRecentStickersNotModified extends TLConstructor<MessagesRecentStickersNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 186120336;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
