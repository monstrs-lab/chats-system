import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountUpdatePasswordSettingsValues {
  password: any
  newSettings: any
}

export class AccountUpdatePasswordSettings extends TLMethod<AccountUpdatePasswordSettingsValues> {
  static override CONSTRUCTOR_ID = -1516564433
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'password',
      type: 'InputCheckPasswordSRP',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_settings',
      type: 'account.PasswordInputSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get password(): any {
    return this.getParamValue<any>('password')
  }

  get newSettings(): any {
    return this.getParamValue<any>('newSettings')
  }
}
