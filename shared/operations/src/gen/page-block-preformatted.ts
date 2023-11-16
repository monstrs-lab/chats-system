import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockPreformattedValues {
  text: any
  language: string
}

export class PageBlockPreformatted extends TLConstructor<PageBlockPreformattedValues> {
  static override CONSTRUCTOR_ID: number = -1066346178
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'text',
      type: 'RichText',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'language',
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

  get text(): any {
    return this.getParamValue<any>('text')
  }

  get language(): string {
    return this.getParamValue<string>('language')
  }
}
