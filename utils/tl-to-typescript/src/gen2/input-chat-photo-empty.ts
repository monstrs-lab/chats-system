import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputChatPhotoEmptyValues {
}

export class InputChatPhotoEmpty extends TLConstructor<InputChatPhotoEmptyValues> {
    static override CONSTRUCTOR_ID: number = 480546647;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
