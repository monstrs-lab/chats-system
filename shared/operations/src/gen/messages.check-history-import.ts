import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesCheckHistoryImportValues {
  importHead: string
}

export class MessagesCheckHistoryImport extends TLMethod<MessagesCheckHistoryImportValues> {
  static override CONSTRUCTOR_ID = 1140726259
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'import_head',
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

  get importHead(): string {
    return this.getParamValue<string>('importHead')
  }
}
