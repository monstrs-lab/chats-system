import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueTypeTemporaryRegistrationValues {}

export class SecureValueTypeTemporaryRegistration extends TLConstructor<SecureValueTypeTemporaryRegistrationValues> {
  static override CONSTRUCTOR_ID: number = -368907213
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
