import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogPeerFolderValues {
  folderId: number
}

export class DialogPeerFolder extends TLConstructor<DialogPeerFolderValues> {
  static override CONSTRUCTOR_ID: number = 1363483106
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'folder_id',
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

  get folderId(): number {
    return this.getParamValue<number>('folderId')
  }
}
