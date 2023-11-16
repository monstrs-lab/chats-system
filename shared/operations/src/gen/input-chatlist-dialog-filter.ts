import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputChatlistDialogFilterValues {
  filterId: number
}

export class InputChatlistDialogFilter extends TLConstructor<InputChatlistDialogFilterValues> {
  static override CONSTRUCTOR_ID: number = -203367885
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'filter_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get filterId(): number {
    return this.getParamValue<number>('filterId')
  }
}
