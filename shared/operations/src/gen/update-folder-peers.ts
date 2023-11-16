import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateFolderPeersValues {
  folderPeers: Array<any>
  pts: number
  ptsCount: number
}

export class UpdateFolderPeers extends TLConstructor<UpdateFolderPeersValues> {
  static override CONSTRUCTOR_ID: number = 422972864
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'folder_peers',
      type: 'FolderPeer',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'pts',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'pts_count',
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

  get folderPeers(): Array<any> {
    return this.getParamValue<Array<any>>('folderPeers')
  }

  get pts(): number {
    return this.getParamValue<number>('pts')
  }

  get ptsCount(): number {
    return this.getParamValue<number>('ptsCount')
  }
}
