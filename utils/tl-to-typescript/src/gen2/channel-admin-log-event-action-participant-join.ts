import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionParticipantJoinValues {
}

export class ChannelAdminLogEventActionParticipantJoin extends TLConstructor<ChannelAdminLogEventActionParticipantJoinValues> {
    static override CONSTRUCTOR_ID: number = 405815507;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
