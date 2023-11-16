import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface JsonNumberValues {
  value: number
}

export class JsonNumber extends TLConstructor<JsonNumberValues> {
  static override CONSTRUCTOR_ID: number = 736157604
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'value',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get value(): number {
    return this.getParamValue<number>('value')
  }
}
