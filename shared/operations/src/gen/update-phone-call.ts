import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePhoneCallValues {
  phoneCall: any
}

export class UpdatePhoneCall extends TLConstructor<UpdatePhoneCallValues> {
  static override CONSTRUCTOR_ID: number = -1425052898
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phone_call',
      type: 'PhoneCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get phoneCall(): any {
    return this.getParamValue<any>('phoneCall')
  }
}
