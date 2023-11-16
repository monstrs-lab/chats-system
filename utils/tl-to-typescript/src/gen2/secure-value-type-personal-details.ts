import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueTypePersonalDetailsValues {
}

export class SecureValueTypePersonalDetails extends TLConstructor<SecureValueTypePersonalDetailsValues> {
    static override CONSTRUCTOR_ID: number = 2636808675;
    static override PARAMS: Array<TLExtendedSchemaParam> = [];
}
