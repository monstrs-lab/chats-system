import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMediaPollValues {
  flags: any
  poll: any
  correctAnswers: Array<Buffer>
  solution: string
  solutionEntities: Array<any>
}

export class InputMediaPoll extends TLConstructor<InputMediaPollValues> {
  static override CONSTRUCTOR_ID: number = 261416433
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
      name: 'correct_answers',
      type: 'bytes',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
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
      flagIndex: 1,
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
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get poll(): any {
    return this.getParamValue<any>('poll')
  }

  get correctAnswers(): Array<Buffer> {
    return this.getParamValue<Array<Buffer>>('correctAnswers')
  }

  get solution(): string {
    return this.getParamValue<string>('solution')
  }

  get solutionEntities(): Array<any> {
    return this.getParamValue<Array<any>>('solutionEntities')
  }
}
