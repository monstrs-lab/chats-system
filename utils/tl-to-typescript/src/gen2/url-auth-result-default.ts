import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UrlAuthResultDefaultValues {
}

export class UrlAuthResultDefault extends TLConstructor<UrlAuthResultDefaultValues> {
    static override CONSTRUCTOR_ID: number = 2849430303;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
