import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionAttachMenuBotAllowedValues {
}

export class MessageActionAttachMenuBotAllowed extends TLConstructor<MessageActionAttachMenuBotAllowedValues> {
    static override CONSTRUCTOR_ID: number = 3890700183;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
