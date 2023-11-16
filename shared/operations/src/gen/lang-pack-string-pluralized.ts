import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface LangPackStringPluralizedValues {
  flags: any
  key: string
  zeroValue: string
  oneValue: string
  twoValue: string
  fewValue: string
  manyValue: string
  otherValue: string
}

export class LangPackStringPluralized extends TLConstructor<LangPackStringPluralizedValues> {
  static override CONSTRUCTOR_ID: number = 1816636575
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
      name: 'key',
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
      name: 'zero_value',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'one_value',
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
      name: 'two_value',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'few_value',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'many_value',
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
      name: 'other_value',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get key(): string {
    return this.getParamValue<string>('key')
  }

  get zeroValue(): string {
    return this.getParamValue<string>('zeroValue')
  }

  get oneValue(): string {
    return this.getParamValue<string>('oneValue')
  }

  get twoValue(): string {
    return this.getParamValue<string>('twoValue')
  }

  get fewValue(): string {
    return this.getParamValue<string>('fewValue')
  }

  get manyValue(): string {
    return this.getParamValue<string>('manyValue')
  }

  get otherValue(): string {
    return this.getParamValue<string>('otherValue')
  }
}
