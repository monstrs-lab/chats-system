import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePinnedDialogsValues {
  flags: any
  folderId: number
  order: Array<any>
}

export class UpdatePinnedDialogs extends TLConstructor<UpdatePinnedDialogsValues> {
  static override CONSTRUCTOR_ID: number = -99664734
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
      name: 'folder_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'order',
      type: 'DialogPeer',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get folderId(): number {
    return this.getParamValue<number>('folderId')
  }

  get order(): Array<any> {
    return this.getParamValue<Array<any>>('order')
  }
}
