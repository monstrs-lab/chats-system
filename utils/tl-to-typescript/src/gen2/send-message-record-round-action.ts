import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageRecordRoundActionValues {
}

export class SendMessageRecordRoundAction extends TLConstructor<SendMessageRecordRoundActionValues> {
    static override CONSTRUCTOR_ID: number = 2297593788;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
