import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateInlineBotCallbackQueryValues {
  flags: any
  queryId: bigint
  userId: bigint
  msgId: any
  chatInstance: bigint
  data: Buffer
  gameShortName: string
}

export class UpdateInlineBotCallbackQuery extends TLConstructor<UpdateInlineBotCallbackQueryValues> {
  static override CONSTRUCTOR_ID: number = 1763610706
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
      name: 'query_id',
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
      name: 'user_id',
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
      name: 'msg_id',
      type: 'InputBotInlineMessageID',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'chat_instance',
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
      name: 'data',
      type: 'bytes',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'game_short_name',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get queryId(): bigint {
    return this.getParamValue<bigint>('queryId')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get msgId(): any {
    return this.getParamValue<any>('msgId')
  }

  get chatInstance(): bigint {
    return this.getParamValue<bigint>('chatInstance')
  }

  get data(): Buffer {
    return this.getParamValue<Buffer>('data')
  }

  get gameShortName(): string {
    return this.getParamValue<string>('gameShortName')
  }
}
