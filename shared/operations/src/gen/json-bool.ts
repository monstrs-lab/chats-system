import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface JsonBoolValues {
  value: any
}

export class JsonBool extends TLConstructor<JsonBoolValues> {
  static override CONSTRUCTOR_ID: number = -952869270
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'value',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get value(): any {
    return this.getParamValue<any>('value')
  }
}
