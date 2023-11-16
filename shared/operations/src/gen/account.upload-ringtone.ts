import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountUploadRingtoneValues {
  file: any
  fileName: string
  mimeType: string
}

export class AccountUploadRingtone extends TLMethod<AccountUploadRingtoneValues> {
  static override CONSTRUCTOR_ID = -2095414366
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get file(): any {
    return this.getParamValue<any>('file')
  }

  get fileName(): string {
    return this.getParamValue<string>('fileName')
  }

  get mimeType(): string {
    return this.getParamValue<string>('mimeType')
  }
}
