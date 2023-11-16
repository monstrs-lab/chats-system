import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpSetBotUpdatesStatusValues {
  pendingUpdatesCount: number
  message: string
}

export class HelpSetBotUpdatesStatus extends TLMethod<HelpSetBotUpdatesStatusValues> {
  static override CONSTRUCTOR_ID = -333262899
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'pending_updates_count',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'message',
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

  get pendingUpdatesCount(): number {
    return this.getParamValue<number>('pendingUpdatesCount')
  }

  get message(): string {
    return this.getParamValue<string>('message')
  }
}
