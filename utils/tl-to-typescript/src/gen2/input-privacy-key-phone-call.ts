import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyPhoneCallValues {
}

export class InputPrivacyKeyPhoneCall extends TLConstructor<InputPrivacyKeyPhoneCallValues> {
    static override CONSTRUCTOR_ID: number = 4206550111;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
