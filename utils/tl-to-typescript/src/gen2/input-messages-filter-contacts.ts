import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMessagesFilterContactsValues {
}

export class InputMessagesFilterContacts extends TLConstructor<InputMessagesFilterContactsValues> {
    static override CONSTRUCTOR_ID: number = 3764575107;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
