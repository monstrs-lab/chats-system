import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesReportEncryptedSpamValues {
  peer: any
}

export class MessagesReportEncryptedSpam extends TLMethod<MessagesReportEncryptedSpamValues> {
  static override CONSTRUCTOR_ID = 1259113487
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
      type: 'InputEncryptedChat',
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
}
