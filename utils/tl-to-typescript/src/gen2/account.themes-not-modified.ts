import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface AccountThemesNotModifiedValues {
}

export class AccountThemesNotModified extends TLConstructor<AccountThemesNotModifiedValues> {
    static override CONSTRUCTOR_ID: number = 4095653410;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
