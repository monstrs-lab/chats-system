import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BotCommandScopeChatsValues {
}

export class BotCommandScopeChats extends TLConstructor<BotCommandScopeChatsValues> {
    static override CONSTRUCTOR_ID: number = 1877059713;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
