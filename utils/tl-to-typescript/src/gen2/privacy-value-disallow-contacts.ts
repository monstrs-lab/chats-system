import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyValueDisallowContactsValues {
}

export class PrivacyValueDisallowContacts extends TLConstructor<PrivacyValueDisallowContactsValues> {
    static override CONSTRUCTOR_ID: number = 4169726490;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
