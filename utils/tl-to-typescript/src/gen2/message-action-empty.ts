import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionEmptyValues {
}

export class MessageActionEmpty extends TLConstructor<MessageActionEmptyValues> {
    static override CONSTRUCTOR_ID: number = 3064919984;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
