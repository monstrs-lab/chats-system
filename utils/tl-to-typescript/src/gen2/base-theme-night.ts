import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface BaseThemeNightValues {
}

export class BaseThemeNight extends TLConstructor<BaseThemeNightValues> {
    static override CONSTRUCTOR_ID: number = 3081969320;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
