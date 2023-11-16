import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface WebPageValues {
    flags: any;
    id: bigint;
    url: string;
    displayUrl: string;
    hash: number;
    type: string;
    siteName: string;
    title: string;
    description: string;
    photo: any;
    embedUrl: string;
    embedType: string;
    embedWidth: number;
    embedHeight: number;
    duration: number;
    author: string;
    document: any;
    cachedPage: any;
    attributes: Array<any>;
}

export class WebPage extends TLConstructor<WebPageValues> {
    static override CONSTRUCTOR_ID: number = 3902555570;
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
            "name": "url",
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
            "name": "display_url",
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
            "name": "hash",
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
            "name": "type",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "site_name",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "title",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "description",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "photo",
            "type": "Photo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "embed_url",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "embed_type",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "embed_width",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "embed_height",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "duration",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "author",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
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
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "cached_page",
            "type": "Page",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "attributes",
            "type": "WebPageAttribute",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get id(): bigint {
        return this.values.id
    }

    get url(): string {
        return this.values.url
    }

    get displayUrl(): string {
        return this.values.displayUrl
    }

    get hash(): number {
        return this.values.hash
    }

    get type(): string {
        return this.values.type
    }

    get siteName(): string {
        return this.values.siteName
    }

    get title(): string {
        return this.values.title
    }

    get description(): string {
        return this.values.description
    }

    get photo(): any {
        return this.values.photo
    }

    get embedUrl(): string {
        return this.values.embedUrl
    }

    get embedType(): string {
        return this.values.embedType
    }

    get embedWidth(): number {
        return this.values.embedWidth
    }

    get embedHeight(): number {
        return this.values.embedHeight
    }

    get duration(): number {
        return this.values.duration
    }

    get author(): string {
        return this.values.author
    }

    get document(): any {
        return this.values.document
    }

    get cachedPage(): any {
        return this.values.cachedPage
    }

    get attributes(): Array<any> {
        return this.values.attributes
    }
}
