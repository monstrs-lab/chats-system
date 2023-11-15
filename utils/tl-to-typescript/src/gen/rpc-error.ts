import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface RpcErrorValues {
    errorCode: number;
    errorMessage: string;
}

export class RpcError extends TLConstructor<RpcErrorValues> {
    static override CONSTRUCTOR_ID: number = 558156313;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "error_code",
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
            "name": "error_message",
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

    get errorCode(): number {
        return this.values.errorCode
    }

    get errorMessage(): string {
        return this.values.errorMessage
    }
}
