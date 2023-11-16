import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessageActionChatEditPhotoValues {
    photo: any;
}

export class MessageActionChatEditPhoto extends TLConstructor<MessageActionChatEditPhotoValues> {
    static override CONSTRUCTOR_ID: number = 2144015272;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get photo(): any {
        return this.values.photo
    }
}
