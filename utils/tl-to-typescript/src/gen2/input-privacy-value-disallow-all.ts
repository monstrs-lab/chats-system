import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyValueDisallowAllValues {
}

export class InputPrivacyValueDisallowAll extends TLConstructor<InputPrivacyValueDisallowAllValues> {
    static override CONSTRUCTOR_ID: number = 3597362889;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
