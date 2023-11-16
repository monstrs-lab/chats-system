import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AvailableReactionValues {
  flags: any
  inactive: boolean
  premium: boolean
  reaction: string
  title: string
  staticIcon: any
  appearAnimation: any
  selectAnimation: any
  activateAnimation: any
  effectAnimation: any
  aroundAnimation: any
  centerIcon: any
}

export class AvailableReaction extends TLConstructor<AvailableReactionValues> {
  static override CONSTRUCTOR_ID: number = -1065882623
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
      name: 'inactive',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'premium',
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
      name: 'reaction',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'static_icon',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'appear_animation',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'select_animation',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'activate_animation',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'effect_animation',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'around_animation',
      type: 'Document',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'center_icon',
      type: 'Document',
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

  get inactive(): boolean {
    return this.getParamValue<boolean>('inactive')
  }

  get premium(): boolean {
    return this.getParamValue<boolean>('premium')
  }

  get reaction(): string {
    return this.getParamValue<string>('reaction')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get staticIcon(): any {
    return this.getParamValue<any>('staticIcon')
  }

  get appearAnimation(): any {
    return this.getParamValue<any>('appearAnimation')
  }

  get selectAnimation(): any {
    return this.getParamValue<any>('selectAnimation')
  }

  get activateAnimation(): any {
    return this.getParamValue<any>('activateAnimation')
  }

  get effectAnimation(): any {
    return this.getParamValue<any>('effectAnimation')
  }

  get aroundAnimation(): any {
    return this.getParamValue<any>('aroundAnimation')
  }

  get centerIcon(): any {
    return this.getParamValue<any>('centerIcon')
  }
}
