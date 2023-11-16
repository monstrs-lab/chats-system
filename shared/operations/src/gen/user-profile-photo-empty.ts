import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserProfilePhotoEmptyValues {}

export class UserProfilePhotoEmpty extends TLConstructor<UserProfilePhotoEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1326562017
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
