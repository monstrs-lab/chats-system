import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface ThemeSettingsValues {
    flags: any;
    messageColorsAnimated: boolean;
    baseTheme: any;
    accentColor: number;
    outboxAccentColor: number;
    messageColors: Array<number>;
    wallpaper: any;
}

export class ThemeSettings extends TLConstructor<ThemeSettingsValues> {
    static override CONSTRUCTOR_ID: number = 4200117972;
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
            "name": "message_colors_animated",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "base_theme",
            "type": "BaseTheme",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "accent_color",
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
            "name": "outbox_accent_color",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "message_colors",
            "type": "int",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "wallpaper",
            "type": "WallPaper",
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

    get messageColorsAnimated(): boolean {
        return this.values.messageColorsAnimated
    }

    get baseTheme(): any {
        return this.values.baseTheme
    }

    get accentColor(): number {
        return this.values.accentColor
    }

    get outboxAccentColor(): number {
        return this.values.outboxAccentColor
    }

    get messageColors(): Array<number> {
        return this.values.messageColors
    }

    get wallpaper(): any {
        return this.values.wallpaper
    }
}
