import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface WallPaperNoFileValues {
    id: bigint;
    flags: any;
    default: boolean;
    dark: boolean;
    settings: any;
}

export class WallPaperNoFile extends TLConstructor<WallPaperNoFileValues> {
    static override CONSTRUCTOR_ID: number = 3766501654;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "id",
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
            "name": "default",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "dark",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "settings",
            "type": "WallPaperSettings",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get id(): bigint {
        return this.values.id
    }

    get flags(): any {
        return this.values.flags
    }

    get default(): boolean {
        return this.values.default
    }

    get dark(): boolean {
        return this.values.dark
    }

    get settings(): any {
        return this.values.settings
    }
}
