import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneGetCallConfigValues {}

export class PhoneGetCallConfig extends TLMethod<PhoneGetCallConfigValues> {
  static override CONSTRUCTOR_ID = 1430593449
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
