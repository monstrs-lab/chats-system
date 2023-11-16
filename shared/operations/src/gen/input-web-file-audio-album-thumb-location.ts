import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputWebFileAudioAlbumThumbLocationValues {
  flags: any
  small: boolean
  document: any
  title: string
  performer: string
}

export class InputWebFileAudioAlbumThumbLocation extends TLConstructor<InputWebFileAudioAlbumThumbLocationValues> {
  static override CONSTRUCTOR_ID: number = -193992412
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
      name: 'small',
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
      name: 'document',
      type: 'InputDocument',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'performer',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get small(): boolean {
    return this.getParamValue<boolean>('small')
  }

  get document(): any {
    return this.getParamValue<any>('document')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get performer(): string {
    return this.getParamValue<string>('performer')
  }
}
