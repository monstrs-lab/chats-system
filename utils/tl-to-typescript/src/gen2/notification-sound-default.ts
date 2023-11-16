import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface NotificationSoundDefaultValues {
}

export class NotificationSoundDefault extends TLConstructor<NotificationSoundDefaultValues> {
    static override CONSTRUCTOR_ID: number = 2548612798;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
