import { TLConstructor } from "@chats-system/tl-types";

export class MsgsAck extends TLConstructor {
    type = "MsgsAck";
    constructorId = 1658238041;
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
