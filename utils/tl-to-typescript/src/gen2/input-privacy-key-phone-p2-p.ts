import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyPhoneP2PValues {
}

export class InputPrivacyKeyPhoneP2P extends TLConstructor<InputPrivacyKeyPhoneP2PValues> {
    static override CONSTRUCTOR_ID: number = 3684593874;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
