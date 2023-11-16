import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLMethod } from "@monstrs/mtproto-tl-core";

interface PhotosUploadProfilePhotoValues {
    flags: any;
    fallback: boolean;
    file: any;
    video: any;
    videoStartTs: number;
    videoEmojiMarkup: any;
}

export class PhotosUploadProfilePhoto extends TLMethod<PhotosUploadProfilePhotoValues> {
    static override CONSTRUCTOR_ID = 154966609;
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
            "name": "fallback",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "file",
            "type": "InputFile",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "video",
            "type": "InputFile",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "video_start_ts",
            "type": "double",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "video_emoji_markup",
            "type": "VideoSize",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get fallback(): boolean {
        return this.values.fallback
    }

    get file(): any {
        return this.values.file
    }

    get video(): any {
        return this.values.video
    }

    get videoStartTs(): number {
        return this.values.videoStartTs
    }

    get videoEmojiMarkup(): any {
        return this.values.videoEmojiMarkup
    }
}
