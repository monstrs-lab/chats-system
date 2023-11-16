import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuBotIconValues {
  flags: any
  name: string
  icon: any
  colors: Array<any>
}

export class AttachMenuBotIcon extends TLConstructor<AttachMenuBotIconValues> {
  static override CONSTRUCTOR_ID: number = -1297663893
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
      name: 'name',
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
      name: 'icon',
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
      name: 'colors',
      type: 'AttachMenuBotIconColor',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get name(): string {
    return this.getParamValue<string>('name')
  }

  get icon(): any {
    return this.getParamValue<any>('icon')
  }

  get colors(): Array<any> {
    return this.getParamValue<Array<any>>('colors')
  }
}
