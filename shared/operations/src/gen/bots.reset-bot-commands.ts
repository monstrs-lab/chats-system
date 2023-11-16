import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsResetBotCommandsValues {
  scope: any
  langCode: string
}

export class BotsResetBotCommands extends TLMethod<BotsResetBotCommandsValues> {
  static override CONSTRUCTOR_ID = 1032708345
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
  ]

  get scope(): any {
    return this.getParamValue<any>('scope')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }
}
