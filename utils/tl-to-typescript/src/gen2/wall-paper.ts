import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface WallPaperValues {
    id: bigint;
    flags: any;
    creator: boolean;
    default: boolean;
    pattern: boolean;
    dark: boolean;
    accessHash: bigint;
    slug: string;
    document: any;
    settings: any;
}

export class WallPaper extends TLConstructor<WallPaperValues> {
    static override CONSTRUCTOR_ID: number = 2755118061;
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
            "name": "creator",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
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
            "name": "pattern",
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
            "name": "access_hash",
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
            "name": "slug",
            "type": "string",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "document",
            "type": "Document",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
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

    get creator(): boolean {
        return this.values.creator
    }

    get default(): boolean {
        return this.values.default
    }

    get pattern(): boolean {
        return this.values.pattern
    }

    get dark(): boolean {
        return this.values.dark
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }

    get slug(): string {
        return this.values.slug
    }

    get document(): any {
        return this.values.document
    }

    get settings(): any {
        return this.values.settings
    }
}
