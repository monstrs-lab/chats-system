import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageRecordVideoActionValues {
}

export class SendMessageRecordVideoAction extends TLConstructor<SendMessageRecordVideoActionValues> {
    static override CONSTRUCTOR_ID: number = 2710034031;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
