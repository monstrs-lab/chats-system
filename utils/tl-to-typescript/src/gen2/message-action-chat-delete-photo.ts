import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionChatDeletePhotoValues {
}

export class MessageActionChatDeletePhoto extends TLConstructor<MessageActionChatDeletePhotoValues> {
    static override CONSTRUCTOR_ID: number = 2514746351;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
