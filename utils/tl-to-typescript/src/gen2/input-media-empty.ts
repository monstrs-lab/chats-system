import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMediaEmptyValues {
}

export class InputMediaEmpty extends TLConstructor<InputMediaEmptyValues> {
    static override CONSTRUCTOR_ID: number = 2523198847;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
