import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputNotifyChatsValues {
}

export class InputNotifyChats extends TLConstructor<InputNotifyChatsValues> {
    static override CONSTRUCTOR_ID: number = 1251338318;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
