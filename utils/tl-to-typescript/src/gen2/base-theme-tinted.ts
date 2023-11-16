import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BaseThemeTintedValues {
}

export class BaseThemeTinted extends TLConstructor<BaseThemeTintedValues> {
    static override CONSTRUCTOR_ID: number = 1834973166;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
