import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputUserEmptyValues {
}

export class InputUserEmpty extends TLConstructor<InputUserEmptyValues> {
    static override CONSTRUCTOR_ID: number = 3112732367;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
