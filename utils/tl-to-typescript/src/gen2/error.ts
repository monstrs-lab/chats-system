import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ErrorValues {
    code: number;
    text: string;
}

export class Error extends TLConstructor<ErrorValues> {
    static override CONSTRUCTOR_ID: number = 3300522427;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "code",
            "type": "int",
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

    get code(): number {
        return this.values.code
    }

    get text(): string {
        return this.values.text
    }
}
