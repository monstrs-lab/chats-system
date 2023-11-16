import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface HelpGetConfigValues {
}

export class HelpGetConfig extends TLMethod<HelpGetConfigValues> {
    static override CONSTRUCTOR_ID = 3304659051;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
