import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface InputWallPaperSlugValues {
    slug: string;
}

export class InputWallPaperSlug extends TLConstructor<InputWallPaperSlugValues> {
    static override CONSTRUCTOR_ID: number = 1913199744;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "slug",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get slug(): string {
        return this.values.slug
    }
}
