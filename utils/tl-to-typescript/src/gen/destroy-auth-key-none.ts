import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface DestroyAuthKeyNoneValues {
}

export class DestroyAuthKeyNone extends TLConstructor<DestroyAuthKeyNoneValues> {
    static override CONSTRUCTOR_ID: number = 178201177;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
