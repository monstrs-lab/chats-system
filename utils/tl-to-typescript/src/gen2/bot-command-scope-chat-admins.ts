import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BotCommandScopeChatAdminsValues {
}

export class BotCommandScopeChatAdmins extends TLConstructor<BotCommandScopeChatAdminsValues> {
    static override CONSTRUCTOR_ID: number = 3114950762;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
