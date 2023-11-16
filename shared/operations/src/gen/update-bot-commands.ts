import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateBotCommandsValues {
  peer: any
  botId: bigint
  commands: Array<any>
}

export class UpdateBotCommands extends TLConstructor<UpdateBotCommandsValues> {
  static override CONSTRUCTOR_ID: number = 1299263278
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'bot_id',
      type: 'long',
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

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get botId(): bigint {
    return this.getParamValue<bigint>('botId')
  }

  get commands(): Array<any> {
    return this.getParamValue<Array<any>>('commands')
  }
}
