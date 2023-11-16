import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AuthLoginTokenMigrateToValues {
  dcId: number
  token: Buffer
}

export class AuthLoginTokenMigrateTo extends TLConstructor<AuthLoginTokenMigrateToValues> {
  static override CONSTRUCTOR_ID: number = 110008598
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'dc_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'token',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get dcId(): number {
    return this.getParamValue<number>('dcId')
  }

  get token(): Buffer {
    return this.getParamValue<Buffer>('token')
  }
}
