import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateRecentEmojiStatusesValues {
}

export class UpdateRecentEmojiStatuses extends TLConstructor<UpdateRecentEmojiStatusesValues> {
    static override CONSTRUCTOR_ID: number = 821314523;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
