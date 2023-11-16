import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypeRentalAgreementValues {
}

export class SecureValueTypeRentalAgreement extends TLConstructor<SecureValueTypeRentalAgreementValues> {
    static override CONSTRUCTOR_ID: number = 2340959368;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
