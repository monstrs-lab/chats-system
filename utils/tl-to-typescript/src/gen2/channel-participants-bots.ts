import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelParticipantsBotsValues {
}

export class ChannelParticipantsBots extends TLConstructor<ChannelParticipantsBotsValues> {
    static override CONSTRUCTOR_ID: number = 2966521435;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
