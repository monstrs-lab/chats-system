import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyKeyForwardsValues {
}

export class PrivacyKeyForwards extends TLConstructor<PrivacyKeyForwardsValues> {
    static override CONSTRUCTOR_ID: number = 1777096355;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
