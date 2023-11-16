import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickerSetValues {
  flags: any
  archived: boolean
  official: boolean
  masks: boolean
  animated: boolean
  videos: boolean
  emojis: boolean
  installedDate: number
  id: bigint
  accessHash: bigint
  title: string
  shortName: string
  thumbs: Array<any>
  thumbDcId: number
  thumbVersion: number
  thumbDocumentId: bigint
  count: number
  hash: number
}

export class StickerSet extends TLConstructor<StickerSetValues> {
  static override CONSTRUCTOR_ID: number = 768691932
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
      name: 'archived',
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
      name: 'official',
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
      name: 'masks',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'animated',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'videos',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'emojis',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'installed_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'access_hash',
      type: 'long',
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
      name: 'short_name',
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
      name: 'thumbs',
      type: 'PhotoSize',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'thumb_dc_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'thumb_version',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'thumb_document_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'count',
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
      name: 'hash',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get archived(): boolean {
    return this.getParamValue<boolean>('archived')
  }

  get official(): boolean {
    return this.getParamValue<boolean>('official')
  }

  get masks(): boolean {
    return this.getParamValue<boolean>('masks')
  }

  get animated(): boolean {
    return this.getParamValue<boolean>('animated')
  }

  get videos(): boolean {
    return this.getParamValue<boolean>('videos')
  }

  get emojis(): boolean {
    return this.getParamValue<boolean>('emojis')
  }

  get installedDate(): number {
    return this.getParamValue<number>('installedDate')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get shortName(): string {
    return this.getParamValue<string>('shortName')
  }

  get thumbs(): Array<any> {
    return this.getParamValue<Array<any>>('thumbs')
  }

  get thumbDcId(): number {
    return this.getParamValue<number>('thumbDcId')
  }

  get thumbVersion(): number {
    return this.getParamValue<number>('thumbVersion')
  }

  get thumbDocumentId(): bigint {
    return this.getParamValue<bigint>('thumbDocumentId')
  }

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get hash(): number {
    return this.getParamValue<number>('hash')
  }
}
