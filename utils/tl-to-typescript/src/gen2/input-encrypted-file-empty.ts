import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputEncryptedFileEmptyValues {
}

export class InputEncryptedFileEmpty extends TLConstructor<InputEncryptedFileEmptyValues> {
    static override CONSTRUCTOR_ID: number = 406307684;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
