import { TLConstructor } from "@chats-system/tl-types";

export class RpcError extends TLConstructor {
    type = "RpcError";
    constructorId = 558156313;
    params = [
          {
            "name": "error_code",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "error_message",
            "type": "string",
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
