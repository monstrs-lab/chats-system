import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputUserSelfValues {
}

export class InputUserSelf extends TLConstructor<InputUserSelfValues> {
    static override CONSTRUCTOR_ID: number = 4156666175;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
