import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PageBlockAudioValues {
    audioId: bigint;
    caption: any;
}

export class PageBlockAudio extends TLConstructor<PageBlockAudioValues> {
    static override CONSTRUCTOR_ID: number = 2151899626;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "audio_id",
            "type": "long",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "caption",
            "type": "PageCaption",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get audioId(): bigint {
        return this.values.audioId
    }

    get caption(): any {
        return this.values.caption
    }
}
