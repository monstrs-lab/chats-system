import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureValueTypeDriverLicenseValues {}

export class SecureValueTypeDriverLicense extends TLConstructor<SecureValueTypeDriverLicenseValues> {
  static override CONSTRUCTOR_ID: number = 115615172
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
