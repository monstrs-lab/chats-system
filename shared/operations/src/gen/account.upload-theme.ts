import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountUploadThemeValues {
  flags: any
  file: any
  thumb: any
  fileName: string
  mimeType: string
}

export class AccountUploadTheme extends TLMethod<AccountUploadThemeValues> {
  static override CONSTRUCTOR_ID = 473805619
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'file',
      type: 'InputFile',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'thumb',
      type: 'InputFile',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'file_name',
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
      name: 'mime_type',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }

  get thumb(): any {
    return this.getParamValue<any>('thumb')
  }

  get fileName(): string {
    return this.getParamValue<string>('fileName')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }
}
