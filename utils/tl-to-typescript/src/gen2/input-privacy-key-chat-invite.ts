import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputPrivacyKeyChatInviteValues {
}

export class InputPrivacyKeyChatInvite extends TLConstructor<InputPrivacyKeyChatInviteValues> {
    static override CONSTRUCTOR_ID: number = 3187344422;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
