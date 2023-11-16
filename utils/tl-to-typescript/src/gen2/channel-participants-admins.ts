import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelParticipantsAdminsValues {
}

export class ChannelParticipantsAdmins extends TLConstructor<ChannelParticipantsAdminsValues> {
    static override CONSTRUCTOR_ID: number = 3026225513;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
