import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhonePhoneCallValues {
  phoneCall: any
  users: Array<any>
}

export class PhonePhoneCall extends TLConstructor<PhonePhoneCallValues> {
  static override CONSTRUCTOR_ID: number = -326966976
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
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get phoneCall(): any {
    return this.getParamValue<any>('phoneCall')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
