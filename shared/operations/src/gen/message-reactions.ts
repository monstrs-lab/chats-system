import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageReactionsValues {
  flags: any
  min: boolean
  canSeeList: boolean
  results: Array<any>
  recentReactions: Array<any>
}

export class MessageReactions extends TLConstructor<MessageReactionsValues> {
  static override CONSTRUCTOR_ID: number = 1328256121
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
      name: 'min',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'can_see_list',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'results',
      type: 'ReactionCount',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'recent_reactions',
      type: 'MessagePeerReaction',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get min(): boolean {
    return this.getParamValue<boolean>('min')
  }

  get canSeeList(): boolean {
    return this.getParamValue<boolean>('canSeeList')
  }

  get results(): Array<any> {
    return this.getParamValue<Array<any>>('results')
  }

  get recentReactions(): Array<any> {
    return this.getParamValue<Array<any>>('recentReactions')
  }
}
