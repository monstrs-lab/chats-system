import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputNotifyBroadcastsValues {
}

export class InputNotifyBroadcasts extends TLConstructor<InputNotifyBroadcastsValues> {
    static override CONSTRUCTOR_ID: number = 2983951486;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
