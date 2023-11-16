import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateConfigValues {
}

export class UpdateConfig extends TLConstructor<UpdateConfigValues> {
    static override CONSTRUCTOR_ID: number = 2720652550;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
