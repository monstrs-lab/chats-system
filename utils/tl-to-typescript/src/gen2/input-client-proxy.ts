import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputClientProxyValues {
    address: string;
    port: number;
}

export class InputClientProxy extends TLConstructor<InputClientProxyValues> {
    static override CONSTRUCTOR_ID: number = 1968737087;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "address",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "port",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get address(): string {
        return this.values.address
    }

    get port(): number {
        return this.values.port
    }
}
