import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PollValues {
  id: bigint
  flags: any
  closed: boolean
  publicVoters: boolean
  multipleChoice: boolean
  quiz: boolean
  question: string
  answers: Array<any>
  closePeriod: number
  closeDate: number
}

export class Poll extends TLConstructor<PollValues> {
  static override CONSTRUCTOR_ID: number = -2032041631
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
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
      name: 'closed',
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
      name: 'public_voters',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'multiple_choice',
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
      name: 'quiz',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'question',
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
      name: 'answers',
      type: 'PollAnswer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'close_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'close_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get closed(): boolean {
    return this.getParamValue<boolean>('closed')
  }

  get publicVoters(): boolean {
    return this.getParamValue<boolean>('publicVoters')
  }

  get multipleChoice(): boolean {
    return this.getParamValue<boolean>('multipleChoice')
  }

  get quiz(): boolean {
    return this.getParamValue<boolean>('quiz')
  }

  get question(): string {
    return this.getParamValue<string>('question')
  }

  get answers(): Array<any> {
    return this.getParamValue<Array<any>>('answers')
  }

  get closePeriod(): number {
    return this.getParamValue<number>('closePeriod')
  }

  get closeDate(): number {
    return this.getParamValue<number>('closeDate')
  }
}
