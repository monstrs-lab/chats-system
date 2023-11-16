import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface JsonStringValues {
  value: string
}

export class JsonString extends TLConstructor<JsonStringValues> {
  static override CONSTRUCTOR_ID: number = -1222740358
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'value',
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

  get value(): string {
    return this.getParamValue<string>('value')
  }
}
