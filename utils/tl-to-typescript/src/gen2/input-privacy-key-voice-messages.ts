import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyVoiceMessagesValues {
}

export class InputPrivacyKeyVoiceMessages extends TLConstructor<InputPrivacyKeyVoiceMessagesValues> {
    static override CONSTRUCTOR_ID: number = 2934349160;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
