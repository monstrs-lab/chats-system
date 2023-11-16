import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountEmojiStatusesNotModifiedValues {
}

export class AccountEmojiStatusesNotModified extends TLConstructor<AccountEmojiStatusesNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 3498894917;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
