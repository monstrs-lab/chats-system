import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotCommandValues {
  command: string
  description: string
}

export class BotCommand extends TLConstructor<BotCommandValues> {
  static override CONSTRUCTOR_ID: number = -1032140601
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'command',
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

  get command(): string {
    return this.getParamValue<string>('command')
  }

  get description(): string {
    return this.getParamValue<string>('description')
  }
}