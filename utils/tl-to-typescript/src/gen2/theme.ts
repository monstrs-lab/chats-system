import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ThemeValues {
    flags: any;
    creator: boolean;
    default: boolean;
    forChat: boolean;
    id: bigint;
    accessHash: bigint;
    slug: string;
    title: string;
    document: any;
    settings: Array<any>;
    emoticon: string;
    installsCount: number;
}

export class Theme extends TLConstructor<ThemeValues> {
    static override CONSTRUCTOR_ID: number = 2685298646;
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
            "name": "for_chat",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
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
            "name": "title",
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
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "settings",
            "type": "ThemeSettings",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "emoticon",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "installs_count",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get creator(): boolean {
        return this.values.creator
    }

    get default(): boolean {
        return this.values.default
    }

    get forChat(): boolean {
        return this.values.forChat
    }

    get id(): bigint {
        return this.values.id
    }

    get accessHash(): bigint {
        return this.values.accessHash
    }

    get slug(): string {
        return this.values.slug
    }

    get title(): string {
        return this.values.title
    }

    get document(): any {
        return this.values.document
    }

    get settings(): Array<any> {
        return this.values.settings
    }

    get emoticon(): string {
        return this.values.emoticon
    }

    get installsCount(): number {
        return this.values.installsCount
    }
}
