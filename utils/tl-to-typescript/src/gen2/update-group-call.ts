import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateGroupCallValues {
    chatId: bigint;
    call: any;
}

export class UpdateGroupCall extends TLConstructor<UpdateGroupCallValues> {
    static override CONSTRUCTOR_ID: number = 347227392;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "chat_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "call",
            "type": "GroupCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get chatId(): bigint {
        return this.values.chatId
    }

    get call(): any {
        return this.values.call
    }
}
