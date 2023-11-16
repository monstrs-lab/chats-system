import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMessagesFilterVoiceValues {
}

export class InputMessagesFilterVoice extends TLConstructor<InputMessagesFilterVoiceValues> {
    static override CONSTRUCTOR_ID: number = 1358283666;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
