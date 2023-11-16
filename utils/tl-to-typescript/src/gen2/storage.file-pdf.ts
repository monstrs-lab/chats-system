import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StorageFilePdfValues {
}

export class StorageFilePdf extends TLConstructor<StorageFilePdfValues> {
    static override CONSTRUCTOR_ID: number = 2921222285;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
