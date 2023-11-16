import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PhotosPhotoValues {
    photo: any;
    users: Array<any>;
}

export class PhotosPhoto extends TLConstructor<PhotosPhotoValues> {
    static override CONSTRUCTOR_ID: number = 539045032;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
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

    get photo(): any {
        return this.values.photo
    }

    get users(): Array<any> {
        return this.values.users
    }
}
