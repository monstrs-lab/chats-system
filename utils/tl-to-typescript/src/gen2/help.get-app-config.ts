import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface HelpGetAppConfigValues {
}

export class HelpGetAppConfig extends TLMethod<HelpGetAppConfigValues> {
    static override CONSTRUCTOR_ID = 2559656208;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
