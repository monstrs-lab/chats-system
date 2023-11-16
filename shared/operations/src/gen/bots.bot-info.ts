import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotsBotInfoValues {
  name: string
  about: string
  description: string
}

export class BotsBotInfo extends TLConstructor<BotsBotInfoValues> {
  static override CONSTRUCTOR_ID: number = -391678544
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
      name: 'about',
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
      name: 'description',
      type: 'string',
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

  get about(): string {
    return this.getParamValue<string>('about')
  }

  get description(): string {
    return this.getParamValue<string>('description')
  }
}
