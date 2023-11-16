import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountPasswordValues {
  flags: any
  hasRecovery: boolean
  hasSecureValues: boolean
  hasPassword: boolean
  currentAlgo: any
  srpB: Buffer
  srpId: bigint
  hint: string
  emailUnconfirmedPattern: string
  newAlgo: any
  newSecureAlgo: any
  secureRandom: Buffer
  pendingResetDate: number
  loginEmailPattern: string
}

export class AccountPassword extends TLConstructor<AccountPasswordValues> {
  static override CONSTRUCTOR_ID: number = -1787080453
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
      name: 'has_recovery',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'has_secure_values',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'has_password',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'current_algo',
      type: 'PasswordKdfAlgo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'srp_B',
      type: 'bytes',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'srp_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
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
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'email_unconfirmed_pattern',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_algo',
      type: 'PasswordKdfAlgo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_secure_algo',
      type: 'SecurePasswordKdfAlgo',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'secure_random',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pending_reset_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'login_email_pattern',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get hasRecovery(): boolean {
    return this.getParamValue<boolean>('hasRecovery')
  }

  get hasSecureValues(): boolean {
    return this.getParamValue<boolean>('hasSecureValues')
  }

  get hasPassword(): boolean {
    return this.getParamValue<boolean>('hasPassword')
  }

  get currentAlgo(): any {
    return this.getParamValue<any>('currentAlgo')
  }

  get srpB(): Buffer {
    return this.getParamValue<Buffer>('srpB')
  }

  get srpId(): bigint {
    return this.getParamValue<bigint>('srpId')
  }

  get hint(): string {
    return this.getParamValue<string>('hint')
  }

  get emailUnconfirmedPattern(): string {
    return this.getParamValue<string>('emailUnconfirmedPattern')
  }

  get newAlgo(): any {
    return this.getParamValue<any>('newAlgo')
  }

  get newSecureAlgo(): any {
    return this.getParamValue<any>('newSecureAlgo')
  }

  get secureRandom(): Buffer {
    return this.getParamValue<Buffer>('secureRandom')
  }

  get pendingResetDate(): number {
    return this.getParamValue<number>('pendingResetDate')
  }

  get loginEmailPattern(): string {
    return this.getParamValue<string>('loginEmailPattern')
  }
}
