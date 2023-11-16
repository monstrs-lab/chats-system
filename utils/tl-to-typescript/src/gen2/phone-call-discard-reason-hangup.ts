import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PhoneCallDiscardReasonHangupValues {
}

export class PhoneCallDiscardReasonHangup extends TLConstructor<PhoneCallDiscardReasonHangupValues> {
    static override CONSTRUCTOR_ID: number = 1471006352;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
