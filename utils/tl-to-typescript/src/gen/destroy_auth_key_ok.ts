import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class DestroyAuthKeyOk extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -161422892;
    static override PARAMS: Array<TLSchemaParamParsed> = [];

    constructor() {
        super()
    }
}
