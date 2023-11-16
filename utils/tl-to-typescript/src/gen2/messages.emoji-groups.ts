import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesEmojiGroupsValues {
    hash: number;
    groups: Array<any>;
}

export class MessagesEmojiGroups extends TLConstructor<MessagesEmojiGroupsValues> {
    static override CONSTRUCTOR_ID: number = 2283780427;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "hash",
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
            "name": "groups",
            "type": "EmojiGroup",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get hash(): number {
        return this.values.hash
    }

    get groups(): Array<any> {
        return this.values.groups
    }
}
