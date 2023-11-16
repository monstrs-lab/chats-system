import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface BotsGetBotCommandsValues {
  scope: any
  langCode: string
}

export class BotsGetBotCommands extends TLMethod<BotsGetBotCommandsValues> {
  static override CONSTRUCTOR_ID = -481554986
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
