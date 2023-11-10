import { TLConstructor } from "@chats-system/tl-types";

export class MsgResendReq extends TLConstructor {
    type = "MsgResendReq";
    constructorId = 2105940488;
    params = [
          {
            "name": "msg_ids",
            "type": "long",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];
}
