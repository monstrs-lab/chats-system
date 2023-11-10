import { TLConstructor } from "@chats-system/tl-types";

export class DestroySessionOk extends TLConstructor {
    type = "DestroySessionRes";
    constructorId = -501201412;
    params = [
          {
            "name": "session_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];
}
