import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface ChannelsGetParticipantsValues {
    channel: any;
    filter: any;
    offset: number;
    limit: number;
    hash: bigint;
}

export class ChannelsGetParticipants extends TLMethod<ChannelsGetParticipantsValues> {
    static override CONSTRUCTOR_ID = 2010044880;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "channel",
            "type": "InputChannel",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "filter",
            "type": "ChannelParticipantsFilter",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "offset",
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
            "name": "limit",
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
            "name": "hash",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get channel(): any {
        return this.values.channel
    }

    get filter(): any {
        return this.values.filter
    }

    get offset(): number {
        return this.values.offset
    }

    get limit(): number {
        return this.values.limit
    }

    get hash(): bigint {
        return this.values.hash
    }
}
