import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSecureValuesSentMeValues {
  values: Array<any>
  credentials: any
}

export class MessageActionSecureValuesSentMe extends TLConstructor<MessageActionSecureValuesSentMeValues> {
  static override CONSTRUCTOR_ID: number = 455635795
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'values',
      type: 'SecureValue',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'credentials',
      type: 'SecureCredentialsEncrypted',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get values(): Array<any> {
    return this.getParamValue<Array<any>>('values')
  }

  get credentials(): any {
    return this.getParamValue<any>('credentials')
  }
}
