import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypePassportRegistrationValues {
}

export class SecureValueTypePassportRegistration extends TLConstructor<SecureValueTypePassportRegistrationValues> {
    static override CONSTRUCTOR_ID: number = 2581823594;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
