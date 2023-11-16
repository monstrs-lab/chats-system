import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdatesDifferenceSliceValues {
    newMessages: Array<any>;
    newEncryptedMessages: Array<any>;
    otherUpdates: Array<any>;
    chats: Array<any>;
    users: Array<any>;
    intermediateState: any;
}

export class UpdatesDifferenceSlice extends TLConstructor<UpdatesDifferenceSliceValues> {
    static override CONSTRUCTOR_ID: number = 2835028353;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "new_messages",
            "type": "Message",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "new_encrypted_messages",
            "type": "EncryptedMessage",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "other_updates",
            "type": "Update",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "chats",
            "type": "Chat",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "users",
            "type": "User",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "intermediate_state",
            "type": "updates.State",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get newMessages(): Array<any> {
        return this.values.newMessages
    }

    get newEncryptedMessages(): Array<any> {
        return this.values.newEncryptedMessages
    }

    get otherUpdates(): Array<any> {
        return this.values.otherUpdates
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get users(): Array<any> {
        return this.values.users
    }

    get intermediateState(): any {
        return this.values.intermediateState
    }
}
