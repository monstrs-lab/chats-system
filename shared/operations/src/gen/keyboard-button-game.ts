import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface KeyboardButtonGameValues {
  text: string
}

export class KeyboardButtonGame extends TLConstructor<KeyboardButtonGameValues> {
  static override CONSTRUCTOR_ID: number = 1358175439
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
  ]

  get text(): string {
    return this.getParamValue<string>('text')
  }
}
