import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SpeakingInGroupCallActionValues {
}

export class SpeakingInGroupCallAction extends TLConstructor<SpeakingInGroupCallActionValues> {
    static override CONSTRUCTOR_ID: number = 3643548293;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
