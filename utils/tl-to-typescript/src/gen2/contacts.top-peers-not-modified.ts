import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ContactsTopPeersNotModifiedValues {
}

export class ContactsTopPeersNotModified extends TLConstructor<ContactsTopPeersNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 3727060725;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
