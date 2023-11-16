import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelLocationEmptyValues {
}

export class ChannelLocationEmpty extends TLConstructor<ChannelLocationEmptyValues> {
    static override CONSTRUCTOR_ID: number = 3216354699;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
