import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesFeaturedStickersValues {
  flags: any
  premium: boolean
  hash: bigint
  count: number
  sets: Array<any>
  unread: Array<bigint>
}

export class MessagesFeaturedStickers extends TLConstructor<MessagesFeaturedStickersValues> {
  static override CONSTRUCTOR_ID: number = -1103615738
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
      name: 'premium',
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
      name: 'hash',
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
      name: 'sets',
      type: 'StickerSetCovered',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'unread',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get premium(): boolean {
    return this.getParamValue<boolean>('premium')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get sets(): Array<any> {
    return this.getParamValue<Array<any>>('sets')
  }

  get unread(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('unread')
  }
}
