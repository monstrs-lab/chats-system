import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AuthResetAuthorizationsValues {}

export class AuthResetAuthorizations extends TLMethod<AuthResetAuthorizationsValues> {
  static override CONSTRUCTOR_ID = -1616179942
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
