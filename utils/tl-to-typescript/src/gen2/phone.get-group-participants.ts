import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhoneGetGroupParticipantsValues {
    call: any;
    ids: Array<any>;
    sources: Array<number>;
    offset: string;
    limit: number;
}

export class PhoneGetGroupParticipants extends TLMethod<PhoneGetGroupParticipantsValues> {
    static override CONSTRUCTOR_ID = 3310934187;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "call",
            "type": "InputGroupCall",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "ids",
            "type": "InputPeer",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "sources",
            "type": "int",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "offset",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "limit",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get call(): any {
        return this.values.call
    }

    get ids(): Array<any> {
        return this.values.ids
    }

    get sources(): Array<number> {
        return this.values.sources
    }

    get offset(): string {
        return this.values.offset
    }

    get limit(): number {
        return this.values.limit
    }
}
