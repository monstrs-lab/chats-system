import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputMessagesFilterDocumentValues {
}

export class InputMessagesFilterDocument extends TLConstructor<InputMessagesFilterDocumentValues> {
    static override CONSTRUCTOR_ID: number = 2665345416;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
