import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageExtendedMediaValues {
    media: any;
}

export class MessageExtendedMedia extends TLConstructor<MessageExtendedMediaValues> {
    static override CONSTRUCTOR_ID: number = 3997670500;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "media",
            "type": "MessageMedia",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get media(): any {
        return this.values.media
    }
}
