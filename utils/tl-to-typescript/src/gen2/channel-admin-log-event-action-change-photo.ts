import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ChannelAdminLogEventActionChangePhotoValues {
    prevPhoto: any;
    newPhoto: any;
}

export class ChannelAdminLogEventActionChangePhoto extends TLConstructor<ChannelAdminLogEventActionChangePhotoValues> {
    static override CONSTRUCTOR_ID: number = 1129042607;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "prev_photo",
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
            "name": "new_photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get prevPhoto(): any {
        return this.values.prevPhoto
    }

    get newPhoto(): any {
        return this.values.newPhoto
    }
}
