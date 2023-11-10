import { TLConstructor } from "@chats-system/tl-types";

export class MsgsStateReq extends TLConstructor {
    type = "MsgsStateReq";
    constructorId = -630588590;
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
