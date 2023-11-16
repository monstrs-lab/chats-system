import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TextConcatValues {
  texts: Array<any>
}

export class TextConcat extends TLConstructor<TextConcatValues> {
  static override CONSTRUCTOR_ID: number = 2120376535
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'texts',
      type: 'RichText',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get texts(): Array<any> {
    return this.getParamValue<Array<any>>('texts')
  }
}
