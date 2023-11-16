import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionPinMessageValues {
}

export class MessageActionPinMessage extends TLConstructor<MessageActionPinMessageValues> {
    static override CONSTRUCTOR_ID: number = 2495428845;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
