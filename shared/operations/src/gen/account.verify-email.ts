import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountVerifyEmailValues {
  purpose: any
  verification: any
}

export class AccountVerifyEmail extends TLMethod<AccountVerifyEmailValues> {
  static override CONSTRUCTOR_ID = 53322959
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'purpose',
      type: 'EmailVerifyPurpose',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'verification',
      type: 'EmailVerification',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get purpose(): any {
    return this.getParamValue<any>('purpose')
  }

  get verification(): any {
    return this.getParamValue<any>('verification')
  }
}
