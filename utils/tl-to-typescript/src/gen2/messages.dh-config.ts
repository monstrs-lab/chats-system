import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesDhConfigValues {
    g: number;
    p: Buffer;
    version: number;
    random: Buffer;
}

export class MessagesDhConfig extends TLConstructor<MessagesDhConfigValues> {
    static override CONSTRUCTOR_ID: number = 740433629;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "g",
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
            "name": "p",
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
            "name": "version",
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
            "name": "random",
            "type": "bytes",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get g(): number {
        return this.values.g
    }

    get p(): Buffer {
        return this.values.p
    }

    get version(): number {
        return this.values.version
    }

    get random(): Buffer {
        return this.values.random
    }
}
