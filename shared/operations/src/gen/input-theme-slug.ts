import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputThemeSlugValues {
  slug: string
}

export class InputThemeSlug extends TLConstructor<InputThemeSlugValues> {
  static override CONSTRUCTOR_ID: number = -175567375
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'slug',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get slug(): string {
    return this.getParamValue<string>('slug')
  }
}
