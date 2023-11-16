import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface UpdateThemeValues {
    theme: any;
}

export class UpdateTheme extends TLConstructor<UpdateThemeValues> {
    static override CONSTRUCTOR_ID: number = 2182544291;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "theme",
            "type": "Theme",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get theme(): any {
        return this.values.theme
    }
}
