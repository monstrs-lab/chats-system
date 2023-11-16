import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface HelpPremiumPromoValues {
    statusText: string;
    statusEntities: Array<any>;
    videoSections: Array<string>;
    videos: Array<any>;
    periodOptions: Array<any>;
    users: Array<any>;
}

export class HelpPremiumPromo extends TLConstructor<HelpPremiumPromoValues> {
    static override CONSTRUCTOR_ID: number = 1395946908;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "status_text",
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
            "name": "status_entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "video_sections",
            "type": "string",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "videos",
            "type": "Document",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "period_options",
            "type": "PremiumSubscriptionOption",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
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

    get statusText(): string {
        return this.values.statusText
    }

    get statusEntities(): Array<any> {
        return this.values.statusEntities
    }

    get videoSections(): Array<string> {
        return this.values.videoSections
    }

    get videos(): Array<any> {
        return this.values.videos
    }

    get periodOptions(): Array<any> {
        return this.values.periodOptions
    }

    get users(): Array<any> {
        return this.values.users
    }
}
