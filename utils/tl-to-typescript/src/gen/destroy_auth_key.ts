import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLMethod } from "@chats-system/tl-types";

export class DestroyAuthKey extends TLMethod {
    static override CONSTRUCTOR_ID = -784117408;
    static override PARAMS: Array<TLSchemaParamParsed> = [];

    constructor() {
        super()
    }
}
