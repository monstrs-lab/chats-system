import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface SecureValueErrorValues {
    type: any;
    hash: Buffer;
    text: string;
}

export class SecureValueError extends TLConstructor<SecureValueErrorValues> {
    static override CONSTRUCTOR_ID: number = 2258466191;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "type",
            "type": "SecureValueType",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "hash",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "text",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get type(): any {
        return this.values.type
    }

    get hash(): Buffer {
        return this.values.hash
    }

    get text(): string {
        return this.values.text
    }
}
