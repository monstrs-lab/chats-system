import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface FolderValues {
  flags: any
  autofillNewBroadcasts: boolean
  autofillPublicGroups: boolean
  autofillNewCorrespondents: boolean
  id: number
  title: string
  photo: any
}

export class Folder extends TLConstructor<FolderValues> {
  static override CONSTRUCTOR_ID: number = -11252123
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
      name: 'autofill_new_broadcasts',
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
      name: 'autofill_public_groups',
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
      name: 'autofill_new_correspondents',
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
      name: 'id',
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
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'photo',
      type: 'ChatPhoto',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get autofillNewBroadcasts(): boolean {
    return this.getParamValue<boolean>('autofillNewBroadcasts')
  }

  get autofillPublicGroups(): boolean {
    return this.getParamValue<boolean>('autofillPublicGroups')
  }

  get autofillNewCorrespondents(): boolean {
    return this.getParamValue<boolean>('autofillNewCorrespondents')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get photo(): any {
    return this.getParamValue<any>('photo')
  }
}
