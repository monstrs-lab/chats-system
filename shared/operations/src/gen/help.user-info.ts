import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpUserInfoValues {
  message: string
  entities: Array<any>
  author: string
  date: number
}

export class HelpUserInfo extends TLConstructor<HelpUserInfoValues> {
  static override CONSTRUCTOR_ID: number = 32192344
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'author',
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
      name: 'date',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get message(): string {
    return this.getParamValue<string>('message')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get author(): string {
    return this.getParamValue<string>('author')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }
}
