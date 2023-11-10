import { TLConstructor } from "@chats-system/tl-types";

export class GzipPacked extends TLConstructor {
    type = "Object";
    constructorId = 812830625;
    params = [
          {
            "name": "packed_data",
            "type": "bytes",
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
