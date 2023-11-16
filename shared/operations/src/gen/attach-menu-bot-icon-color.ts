import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuBotIconColorValues {
  name: string
  color: number
}

export class AttachMenuBotIconColor extends TLConstructor<AttachMenuBotIconColorValues> {
  static override CONSTRUCTOR_ID: number = 1165423600
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'color',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get name(): string {
    return this.getParamValue<string>('name')
  }

  get color(): number {
    return this.getParamValue<number>('color')
  }
}
