import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StorageFileWebpValues {
}

export class StorageFileWebp extends TLConstructor<StorageFileWebpValues> {
    static override CONSTRUCTOR_ID: number = 276907596;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
