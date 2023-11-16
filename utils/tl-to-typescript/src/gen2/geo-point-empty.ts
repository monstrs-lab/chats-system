import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface GeoPointEmptyValues {
}

export class GeoPointEmpty extends TLConstructor<GeoPointEmptyValues> {
    static override CONSTRUCTOR_ID: number = 286776671;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
