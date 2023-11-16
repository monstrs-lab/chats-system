import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateNewEncryptedMessageValues {
    message: any;
    qts: number;
}

export class UpdateNewEncryptedMessage extends TLConstructor<UpdateNewEncryptedMessageValues> {
    static override CONSTRUCTOR_ID: number = 314359194;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "message",
            "type": "EncryptedMessage",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "qts",
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

    get message(): any {
        return this.values.message
    }

    get qts(): number {
        return this.values.qts
    }
}
