import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChatMigrateToValues {
  channelId: bigint
}

export class MessageActionChatMigrateTo extends TLConstructor<MessageActionChatMigrateToValues> {
  static override CONSTRUCTOR_ID: number = -519864430
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }
}
