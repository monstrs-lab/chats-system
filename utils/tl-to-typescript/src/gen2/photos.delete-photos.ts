import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhotosDeletePhotosValues {
    id: Array<any>;
}

export class PhotosDeletePhotos extends TLMethod<PhotosDeletePhotosValues> {
    static override CONSTRUCTOR_ID = 2278522671;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
            "type": "InputPhoto",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get id(): Array<any> {
        return this.values.id
    }
}
