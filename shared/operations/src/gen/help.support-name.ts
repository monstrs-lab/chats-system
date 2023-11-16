import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpSupportNameValues {
  name: string
}

export class HelpSupportName extends TLConstructor<HelpSupportNameValues> {
  static override CONSTRUCTOR_ID: number = -1945767479
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'name',
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

  get name(): string {
    return this.getParamValue<string>('name')
  }
}
