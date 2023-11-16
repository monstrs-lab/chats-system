import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountTmpPasswordValues {
  tmpPassword: Buffer
  validUntil: number
}

export class AccountTmpPassword extends TLConstructor<AccountTmpPasswordValues> {
  static override CONSTRUCTOR_ID: number = -614138572
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'tmp_password',
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
      name: 'valid_until',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get tmpPassword(): Buffer {
    return this.getParamValue<Buffer>('tmpPassword')
  }

  get validUntil(): number {
    return this.getParamValue<number>('validUntil')
  }
}
