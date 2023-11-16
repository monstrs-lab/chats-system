import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface JsonObjectValueValues {
  key: string
  value: any
}

export class JsonObjectValue extends TLConstructor<JsonObjectValueValues> {
  static override CONSTRUCTOR_ID: number = -1059185703
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'value',
      type: 'JSONValue',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get key(): string {
    return this.getParamValue<string>('key')
  }

  get value(): any {
    return this.getParamValue<any>('value')
  }
}
