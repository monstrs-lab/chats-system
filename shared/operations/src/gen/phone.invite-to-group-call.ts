import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneInviteToGroupCallValues {
  call: any
  users: Array<any>
}

export class PhoneInviteToGroupCall extends TLMethod<PhoneInviteToGroupCallValues> {
  static override CONSTRUCTOR_ID = 2067345760
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'call',
      type: 'InputGroupCall',
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
      type: 'InputUser',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
