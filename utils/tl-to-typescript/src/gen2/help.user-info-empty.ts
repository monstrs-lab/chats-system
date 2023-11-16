import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpUserInfoEmptyValues {
}

export class HelpUserInfoEmpty extends TLConstructor<HelpUserInfoEmptyValues> {
    static override CONSTRUCTOR_ID: number = 4088278765;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
