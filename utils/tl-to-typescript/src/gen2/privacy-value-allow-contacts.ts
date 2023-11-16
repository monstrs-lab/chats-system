import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyValueAllowContactsValues {
}

export class PrivacyValueAllowContacts extends TLConstructor<PrivacyValueAllowContactsValues> {
    static override CONSTRUCTOR_ID: number = 4294843308;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
