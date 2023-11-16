import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyForwardsValues {
}

export class InputPrivacyKeyForwards extends TLConstructor<InputPrivacyKeyForwardsValues> {
    static override CONSTRUCTOR_ID: number = 2765966344;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
