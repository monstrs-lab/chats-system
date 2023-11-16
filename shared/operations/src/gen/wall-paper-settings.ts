import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface WallPaperSettingsValues {
  flags: any
  blur: boolean
  motion: boolean
  backgroundColor: number
  secondBackgroundColor: number
  thirdBackgroundColor: number
  fourthBackgroundColor: number
  intensity: number
  rotation: number
}

export class WallPaperSettings extends TLConstructor<WallPaperSettingsValues> {
  static override CONSTRUCTOR_ID: number = 499236004
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
      name: 'blur',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'motion',
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
      name: 'background_color',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'second_background_color',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'third_background_color',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'fourth_background_color',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'intensity',
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
      name: 'rotation',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get blur(): boolean {
    return this.getParamValue<boolean>('blur')
  }

  get motion(): boolean {
    return this.getParamValue<boolean>('motion')
  }

  get backgroundColor(): number {
    return this.getParamValue<number>('backgroundColor')
  }

  get secondBackgroundColor(): number {
    return this.getParamValue<number>('secondBackgroundColor')
  }

  get thirdBackgroundColor(): number {
    return this.getParamValue<number>('thirdBackgroundColor')
  }

  get fourthBackgroundColor(): number {
    return this.getParamValue<number>('fourthBackgroundColor')
  }

  get intensity(): number {
    return this.getParamValue<number>('intensity')
  }

  get rotation(): number {
    return this.getParamValue<number>('rotation')
  }
}
