import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyKeyVoiceMessagesValues {
}

export class PrivacyKeyVoiceMessages extends TLConstructor<PrivacyKeyVoiceMessagesValues> {
    static override CONSTRUCTOR_ID: number = 110621716;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
