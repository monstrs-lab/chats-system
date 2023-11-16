import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface LangPackStringValues {
  key: string
  value: string
}

export class LangPackString extends TLConstructor<LangPackStringValues> {
  static override CONSTRUCTOR_ID: number = -892239370
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

  get key(): string {
    return this.getParamValue<string>('key')
  }

  get value(): string {
    return this.getParamValue<string>('value')
  }
}
