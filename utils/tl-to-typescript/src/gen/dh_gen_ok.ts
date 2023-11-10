import { TLConstructor } from "@chats-system/tl-types";

export class DhGenOk extends TLConstructor {
    type = "Set_client_DH_params_answer";
    constructorId = 1003222836;
    params = [
          {
            "name": "nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "server_nonce",
            "type": "int128",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_nonce_hash1",
            "type": "int128",
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
