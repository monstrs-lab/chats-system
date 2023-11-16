import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaPollValues {
  poll: any
  results: any
}

export class MessageMediaPoll extends TLConstructor<MessageMediaPollValues> {
  static override CONSTRUCTOR_ID: number = 1272375192
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'poll',
      type: 'Poll',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'results',
      type: 'PollResults',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get poll(): any {
    return this.getParamValue<any>('poll')
  }

  get results(): any {
    return this.getParamValue<any>('results')
  }
}
