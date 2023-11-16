import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ExportedMessageLinkValues {
    link: string;
    html: string;
}

export class ExportedMessageLink extends TLConstructor<ExportedMessageLinkValues> {
    static override CONSTRUCTOR_ID: number = 1571494644;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "link",
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
            "name": "html",
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

    get link(): string {
        return this.values.link
    }

    get html(): string {
        return this.values.html
    }
}
