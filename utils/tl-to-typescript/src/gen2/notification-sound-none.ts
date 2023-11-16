import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NotificationSoundNoneValues {
}

export class NotificationSoundNone extends TLConstructor<NotificationSoundNoneValues> {
    static override CONSTRUCTOR_ID: number = 1863070943;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
