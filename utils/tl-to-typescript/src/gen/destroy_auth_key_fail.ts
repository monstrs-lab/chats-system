import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class DestroyAuthKeyFail extends TLConstructor {
    static override CONSTRUCTOR_ID: number = -368010477;
    static override PARAMS: Array<TLSchemaParamParsed> = [];

    constructor() {
        super()
    }
}
