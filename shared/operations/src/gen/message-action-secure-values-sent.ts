import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionSecureValuesSentValues {
  types: Array<any>
}

export class MessageActionSecureValuesSent extends TLConstructor<MessageActionSecureValuesSentValues> {
  static override CONSTRUCTOR_ID: number = -648257196
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'types',
      type: 'SecureValueType',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get types(): Array<any> {
    return this.getParamValue<Array<any>>('types')
  }
}
