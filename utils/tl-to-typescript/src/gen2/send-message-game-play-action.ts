import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SendMessageGamePlayActionValues {
}

export class SendMessageGamePlayAction extends TLConstructor<SendMessageGamePlayActionValues> {
    static override CONSTRUCTOR_ID: number = 3714748232;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
