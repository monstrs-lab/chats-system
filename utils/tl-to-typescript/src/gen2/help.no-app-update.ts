import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpNoAppUpdateValues {
}

export class HelpNoAppUpdate extends TLConstructor<HelpNoAppUpdateValues> {
    static override CONSTRUCTOR_ID: number = 3294258486;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
