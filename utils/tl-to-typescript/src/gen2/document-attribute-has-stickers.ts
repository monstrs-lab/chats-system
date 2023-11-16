import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DocumentAttributeHasStickersValues {
}

export class DocumentAttributeHasStickers extends TLConstructor<DocumentAttributeHasStickersValues> {
    static override CONSTRUCTOR_ID: number = 2550256375;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
