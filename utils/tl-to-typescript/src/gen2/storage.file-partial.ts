import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StorageFilePartialValues {
}

export class StorageFilePartial extends TLConstructor<StorageFilePartialValues> {
    static override CONSTRUCTOR_ID: number = 1086091090;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
