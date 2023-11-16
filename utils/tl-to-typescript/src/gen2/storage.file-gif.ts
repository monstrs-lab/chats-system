import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StorageFileGifValues {
}

export class StorageFileGif extends TLConstructor<StorageFileGifValues> {
    static override CONSTRUCTOR_ID: number = 3403786975;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
