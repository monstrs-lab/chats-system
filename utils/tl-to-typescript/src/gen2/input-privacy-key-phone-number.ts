import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyPhoneNumberValues {
}

export class InputPrivacyKeyPhoneNumber extends TLConstructor<InputPrivacyKeyPhoneNumberValues> {
    static override CONSTRUCTOR_ID: number = 55761658;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
