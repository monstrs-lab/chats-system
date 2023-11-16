import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface UploadGetWebFileValues {
    location: any;
    offset: number;
    limit: number;
}

export class UploadGetWebFile extends TLMethod<UploadGetWebFileValues> {
    static override CONSTRUCTOR_ID = 619086221;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "location",
            "type": "InputWebFileLocation",
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
          }
        ];

    get location(): any {
        return this.values.location
    }

    get offset(): number {
        return this.values.offset
    }

    get limit(): number {
        return this.values.limit
    }
}
