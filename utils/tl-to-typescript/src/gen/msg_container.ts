import { TLConstructor } from "@chats-system/tl-types";

export class MsgContainer extends TLConstructor {
    type = "MessageContainer";
    constructorId = 1945237724;
    params = [
          {
            "name": "messages",
            "type": "vector<%Message>",
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
