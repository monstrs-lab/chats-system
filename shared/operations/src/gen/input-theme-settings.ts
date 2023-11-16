import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputThemeSettingsValues {
  flags: any
  messageColorsAnimated: boolean
  baseTheme: any
  accentColor: number
  outboxAccentColor: number
  messageColors: Array<number>
  wallpaper: any
  wallpaperSettings: any
}

export class InputThemeSettings extends TLConstructor<InputThemeSettingsValues> {
  static override CONSTRUCTOR_ID: number = -1881255857
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'message_colors_animated',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'base_theme',
      type: 'BaseTheme',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'accent_color',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'outbox_accent_color',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'message_colors',
      type: 'int',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'wallpaper',
      type: 'InputWallPaper',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'wallpaper_settings',
      type: 'WallPaperSettings',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get messageColorsAnimated(): boolean {
    return this.getParamValue<boolean>('messageColorsAnimated')
  }

  get baseTheme(): any {
    return this.getParamValue<any>('baseTheme')
  }

  get accentColor(): number {
    return this.getParamValue<number>('accentColor')
  }

  get outboxAccentColor(): number {
    return this.getParamValue<number>('outboxAccentColor')
  }

  get messageColors(): Array<number> {
    return this.getParamValue<Array<number>>('messageColors')
  }

  get wallpaper(): any {
    return this.getParamValue<any>('wallpaper')
  }

  get wallpaperSettings(): any {
    return this.getParamValue<any>('wallpaperSettings')
  }
}
