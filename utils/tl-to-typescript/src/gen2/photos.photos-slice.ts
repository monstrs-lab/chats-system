import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PhotosPhotosSliceValues {
    count: number;
    photos: Array<any>;
    users: Array<any>;
}

export class PhotosPhotosSlice extends TLConstructor<PhotosPhotosSliceValues> {
    static override CONSTRUCTOR_ID: number = 352657236;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
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
            "name": "photos",
            "type": "Photo",
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

    get count(): number {
        return this.values.count
    }

    get photos(): Array<any> {
        return this.values.photos
    }

    get users(): Array<any> {
        return this.values.users
    }
}
