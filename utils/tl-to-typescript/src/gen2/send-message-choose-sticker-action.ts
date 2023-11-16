import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageChooseStickerActionValues {
}

export class SendMessageChooseStickerAction extends TLConstructor<SendMessageChooseStickerActionValues> {
    static override CONSTRUCTOR_ID: number = 2958739121;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
