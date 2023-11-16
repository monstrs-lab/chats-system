import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneSaveCallLogValues {
  peer: any
  file: any
}

export class PhoneSaveCallLog extends TLMethod<PhoneSaveCallLogValues> {
  static override CONSTRUCTOR_ID = 1092913030
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputPhoneCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
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
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get file(): any {
    return this.getParamValue<any>('file')
  }
}
