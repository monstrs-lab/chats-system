import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StorageFilePngValues {
}

export class StorageFilePng extends TLConstructor<StorageFilePngValues> {
    static override CONSTRUCTOR_ID: number = 172975040;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
