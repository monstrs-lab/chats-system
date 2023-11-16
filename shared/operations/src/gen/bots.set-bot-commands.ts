import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsSetBotCommandsValues {
  scope: any
  langCode: string
  commands: Array<any>
}

export class BotsSetBotCommands extends TLMethod<BotsSetBotCommandsValues> {
  static override CONSTRUCTOR_ID = 85399130
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'scope',
      type: 'BotCommandScope',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'lang_code',
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
      name: 'commands',
      type: 'BotCommand',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get scope(): any {
    return this.getParamValue<any>('scope')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get commands(): Array<any> {
    return this.getParamValue<Array<any>>('commands')
  }
}
