import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesToggleStickerSetsValues {
  flags: any
  uninstall: boolean
  archive: boolean
  unarchive: boolean
  stickersets: Array<any>
}

export class MessagesToggleStickerSets extends TLMethod<MessagesToggleStickerSetsValues> {
  static override CONSTRUCTOR_ID = -1257951254
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'uninstall',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'archive',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'unarchive',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'stickersets',
      type: 'InputStickerSet',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get uninstall(): boolean {
    return this.getParamValue<boolean>('uninstall')
  }

  get archive(): boolean {
    return this.getParamValue<boolean>('archive')
  }

  get unarchive(): boolean {
    return this.getParamValue<boolean>('unarchive')
  }

  get stickersets(): Array<any> {
    return this.getParamValue<Array<any>>('stickersets')
  }
}
