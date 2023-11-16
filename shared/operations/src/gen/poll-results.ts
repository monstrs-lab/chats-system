import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PollResultsValues {
  flags: any
  min: boolean
  results: Array<any>
  totalVoters: number
  recentVoters: Array<bigint>
  solution: string
  solutionEntities: Array<any>
}

export class PollResults extends TLConstructor<PollResultsValues> {
  static override CONSTRUCTOR_ID: number = -591909213
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
      name: 'results',
      type: 'PollAnswerVoters',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'total_voters',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'recent_voters',
      type: 'long',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'solution',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'solution_entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
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

  get results(): Array<any> {
    return this.getParamValue<Array<any>>('results')
  }

  get totalVoters(): number {
    return this.getParamValue<number>('totalVoters')
  }

  get recentVoters(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('recentVoters')
  }

  get solution(): string {
    return this.getParamValue<string>('solution')
  }

  get solutionEntities(): Array<any> {
    return this.getParamValue<Array<any>>('solutionEntities')
  }
}
