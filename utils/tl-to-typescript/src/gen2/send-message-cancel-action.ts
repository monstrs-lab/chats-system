import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageCancelActionValues {
}

export class SendMessageCancelAction extends TLConstructor<SendMessageCancelActionValues> {
    static override CONSTRUCTOR_ID: number = 4250847477;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
