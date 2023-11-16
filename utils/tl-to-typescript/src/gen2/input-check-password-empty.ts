import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputCheckPasswordEmptyValues {
}

export class InputCheckPasswordEmpty extends TLConstructor<InputCheckPasswordEmptyValues> {
    static override CONSTRUCTOR_ID: number = 2558588504;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
