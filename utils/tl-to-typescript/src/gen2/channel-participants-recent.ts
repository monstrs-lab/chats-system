import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelParticipantsRecentValues {
}

export class ChannelParticipantsRecent extends TLConstructor<ChannelParticipantsRecentValues> {
    static override CONSTRUCTOR_ID: number = 3728686201;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
