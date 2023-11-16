import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ReplyInlineMarkupValues {
  rows: Array<any>
}

export class ReplyInlineMarkup extends TLConstructor<ReplyInlineMarkupValues> {
  static override CONSTRUCTOR_ID: number = 1218642516
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'rows',
      type: 'KeyboardButtonRow',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get rows(): Array<any> {
    return this.getParamValue<Array<any>>('rows')
  }
}
