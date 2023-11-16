import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthExportAuthorizationValues {
  dcId: number
}

export class AuthExportAuthorization extends TLMethod<AuthExportAuthorizationValues> {
  static override CONSTRUCTOR_ID = -440401971
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
  ]

  get dcId(): number {
    return this.getParamValue<number>('dcId')
  }
}
