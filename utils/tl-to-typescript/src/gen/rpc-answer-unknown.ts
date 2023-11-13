import type { TLSchemaParamParsed } from "@chats-system/tl-json-schema-parser";
import { TLConstructor } from "@chats-system/tl-types";

export class RpcAnswerUnknown extends TLConstructor {
    static override CONSTRUCTOR_ID: number = 1579864942;
    static override PARAMS: Array<TLSchemaParamParsed> = [];
}
