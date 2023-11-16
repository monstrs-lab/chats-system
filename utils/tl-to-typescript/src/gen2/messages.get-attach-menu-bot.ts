import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface MessagesGetAttachMenuBotValues {
    bot: any;
}

export class MessagesGetAttachMenuBot extends TLMethod<MessagesGetAttachMenuBotValues> {
    static override CONSTRUCTOR_ID = 1998676370;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "bot",
            "type": "InputUser",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get bot(): any {
        return this.values.bot
    }
}
