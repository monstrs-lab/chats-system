import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthExportLoginTokenValues {
  apiId: number
  apiHash: string
  exceptIds: Array<bigint>
}

export class AuthExportLoginToken extends TLMethod<AuthExportLoginTokenValues> {
  static override CONSTRUCTOR_ID = -1210022402
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'api_id',
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
      name: 'api_hash',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'except_ids',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get apiId(): number {
    return this.getParamValue<number>('apiId')
  }

  get apiHash(): string {
    return this.getParamValue<string>('apiHash')
  }

  get exceptIds(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('exceptIds')
  }
}
