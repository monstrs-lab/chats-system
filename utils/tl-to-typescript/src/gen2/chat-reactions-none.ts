import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChatReactionsNoneValues {
}

export class ChatReactionsNone extends TLConstructor<ChatReactionsNoneValues> {
    static override CONSTRUCTOR_ID: number = 3942396604;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
