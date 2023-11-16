import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface WebPageAttributeThemeValues {
    flags: any;
    documents: Array<any>;
    settings: any;
}

export class WebPageAttributeTheme extends TLConstructor<WebPageAttributeThemeValues> {
    static override CONSTRUCTOR_ID: number = 1421174295;
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
            "name": "documents",
            "type": "Document",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "settings",
            "type": "ThemeSettings",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get documents(): Array<any> {
        return this.values.documents
    }

    get settings(): any {
        return this.values.settings
    }
}
