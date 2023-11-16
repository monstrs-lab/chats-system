import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ContactsTopPeersDisabledValues {
}

export class ContactsTopPeersDisabled extends TLConstructor<ContactsTopPeersDisabledValues> {
    static override CONSTRUCTOR_ID: number = 3039597469;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
