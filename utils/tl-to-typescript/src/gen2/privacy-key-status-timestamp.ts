import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PrivacyKeyStatusTimestampValues {
}

export class PrivacyKeyStatusTimestamp extends TLConstructor<PrivacyKeyStatusTimestampValues> {
    static override CONSTRUCTOR_ID: number = 3157175088;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
