import { TLConstructor } from "@chats-system/tl-types";

export class MsgCopy extends TLConstructor {
    type = "MessageCopy";
    constructorId = -530561358;
    params = [
          {
            "name": "orig_message",
            "type": "Message",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];
}
