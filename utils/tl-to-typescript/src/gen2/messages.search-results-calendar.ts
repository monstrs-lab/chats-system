import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface MessagesSearchResultsCalendarValues {
    flags: any;
    inexact: boolean;
    count: number;
    minDate: number;
    minMsgId: number;
    offsetIdOffset: number;
    periods: Array<any>;
    messages: Array<any>;
    chats: Array<any>;
    users: Array<any>;
}

export class MessagesSearchResultsCalendar extends TLConstructor<MessagesSearchResultsCalendarValues> {
    static override CONSTRUCTOR_ID: number = 343859772;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "inexact",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "count",
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
            "name": "min_date",
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
            "name": "min_msg_id",
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
            "name": "offset_id_offset",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "periods",
            "type": "SearchResultsCalendarPeriod",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "messages",
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
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get inexact(): boolean {
        return this.values.inexact
    }

    get count(): number {
        return this.values.count
    }

    get minDate(): number {
        return this.values.minDate
    }

    get minMsgId(): number {
        return this.values.minMsgId
    }

    get offsetIdOffset(): number {
        return this.values.offsetIdOffset
    }

    get periods(): Array<any> {
        return this.values.periods
    }

    get messages(): Array<any> {
        return this.values.messages
    }

    get chats(): Array<any> {
        return this.values.chats
    }

    get users(): Array<any> {
        return this.values.users
    }
}
