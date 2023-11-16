import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelMessagesFilterEmptyValues {
}

export class ChannelMessagesFilterEmpty extends TLConstructor<ChannelMessagesFilterEmptyValues> {
    static override CONSTRUCTOR_ID: number = 2496933607;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
