import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPeerEmptyValues {
}

export class InputPeerEmpty extends TLConstructor<InputPeerEmptyValues> {
    static override CONSTRUCTOR_ID: number = 2134579434;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
