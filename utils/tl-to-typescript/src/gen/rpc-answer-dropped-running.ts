import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface RpcAnswerDroppedRunningValues {
}

export class RpcAnswerDroppedRunning extends TLConstructor<RpcAnswerDroppedRunningValues> {
    static override CONSTRUCTOR_ID: number = -847714938;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
