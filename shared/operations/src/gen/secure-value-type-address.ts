import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueTypeAddressValues {}

export class SecureValueTypeAddress extends TLConstructor<SecureValueTypeAddressValues> {
  static override CONSTRUCTOR_ID: number = -874308058
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
