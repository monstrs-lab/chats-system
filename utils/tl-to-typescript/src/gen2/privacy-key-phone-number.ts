import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyKeyPhoneNumberValues {
}

export class PrivacyKeyPhoneNumber extends TLConstructor<PrivacyKeyPhoneNumberValues> {
    static override CONSTRUCTOR_ID: number = 3516589165;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
