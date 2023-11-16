import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface TopPeerCategoryCorrespondentsValues {
}

export class TopPeerCategoryCorrespondents extends TLConstructor<TopPeerCategoryCorrespondentsValues> {
    static override CONSTRUCTOR_ID: number = 104314861;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
