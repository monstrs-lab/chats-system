import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantLeaveValues {
}

export class ChannelAdminLogEventActionParticipantLeave extends TLConstructor<ChannelAdminLogEventActionParticipantLeaveValues> {
    static override CONSTRUCTOR_ID: number = 4170676210;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
