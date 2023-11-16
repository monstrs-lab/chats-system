import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ContactsContactsNotModifiedValues {
}

export class ContactsContactsNotModified extends TLConstructor<ContactsContactsNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 3075189202;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
