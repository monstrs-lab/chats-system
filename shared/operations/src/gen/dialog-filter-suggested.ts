import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogFilterSuggestedValues {
  filter: any
  description: string
}

export class DialogFilterSuggested extends TLConstructor<DialogFilterSuggestedValues> {
  static override CONSTRUCTOR_ID: number = 2004110666
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'filter',
      type: 'DialogFilter',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'description',
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

  get filter(): any {
    return this.getParamValue<any>('filter')
  }

  get description(): string {
    return this.getParamValue<string>('description')
  }
}
