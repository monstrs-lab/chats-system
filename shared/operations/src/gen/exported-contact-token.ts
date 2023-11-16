import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ExportedContactTokenValues {
  url: string
  expires: number
}

export class ExportedContactToken extends TLConstructor<ExportedContactTokenValues> {
  static override CONSTRUCTOR_ID: number = 1103040667
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'url',
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
      name: 'expires',
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

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get expires(): number {
    return this.getParamValue<number>('expires')
  }
}
