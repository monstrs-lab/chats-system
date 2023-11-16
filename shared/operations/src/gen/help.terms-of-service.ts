import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpTermsOfServiceValues {
  flags: any
  popup: boolean
  id: any
  text: string
  entities: Array<any>
  minAgeConfirm: number
}

export class HelpTermsOfService extends TLConstructor<HelpTermsOfServiceValues> {
  static override CONSTRUCTOR_ID: number = 2013922064
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
      name: 'popup',
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
      name: 'id',
      type: 'DataJSON',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'text',
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
      name: 'min_age_confirm',
      type: 'int',
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

  get popup(): boolean {
    return this.getParamValue<boolean>('popup')
  }

  get id(): any {
    return this.getParamValue<any>('id')
  }

  get text(): string {
    return this.getParamValue<string>('text')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get minAgeConfirm(): number {
    return this.getParamValue<number>('minAgeConfirm')
  }
}
