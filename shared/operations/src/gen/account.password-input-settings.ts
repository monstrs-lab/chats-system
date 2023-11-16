import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountPasswordInputSettingsValues {
  flags: any
  newAlgo: any
  newPasswordHash: Buffer
  hint: string
  email: string
  newSecureSettings: any
}

export class AccountPasswordInputSettings extends TLConstructor<AccountPasswordInputSettingsValues> {
  static override CONSTRUCTOR_ID: number = -1036572727
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'new_algo',
      type: 'PasswordKdfAlgo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_password_hash',
      type: 'bytes',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hint',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'email',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_secure_settings',
      type: 'SecureSecretSettings',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get newAlgo(): any {
    return this.getParamValue<any>('newAlgo')
  }

  get newPasswordHash(): Buffer {
    return this.getParamValue<Buffer>('newPasswordHash')
  }

  get hint(): string {
    return this.getParamValue<string>('hint')
  }

  get email(): string {
    return this.getParamValue<string>('email')
  }

  get newSecureSettings(): any {
    return this.getParamValue<any>('newSecureSettings')
  }
}