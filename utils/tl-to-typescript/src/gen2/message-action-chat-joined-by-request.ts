import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionChatJoinedByRequestValues {
}

export class MessageActionChatJoinedByRequest extends TLConstructor<MessageActionChatJoinedByRequestValues> {
    static override CONSTRUCTOR_ID: number = 3955008459;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
