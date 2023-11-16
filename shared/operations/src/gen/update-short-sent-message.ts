import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateShortSentMessageValues {
  flags: any
  out: boolean
  id: number
  pts: number
  ptsCount: number
  date: number
  media: any
  entities: Array<any>
  ttlPeriod: number
}

export class UpdateShortSentMessage extends TLConstructor<UpdateShortSentMessageValues> {
  static override CONSTRUCTOR_ID: number = -1877614335
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
      name: 'out',
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
    {
      name: 'date',
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
      name: 'media',
      type: 'MessageMedia',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'entities',
      type: 'MessageEntity',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'ttl_period',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 25,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get out(): boolean {
    return this.getParamValue<boolean>('out')
  }

  get id(): number {
    return this.getParamValue<number>('id')
  }

  get pts(): number {
    return this.getParamValue<number>('pts')
  }

  get ptsCount(): number {
    return this.getParamValue<number>('ptsCount')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get media(): any {
    return this.getParamValue<any>('media')
  }

  get entities(): Array<any> {
    return this.getParamValue<Array<any>>('entities')
  }

  get ttlPeriod(): number {
    return this.getParamValue<number>('ttlPeriod')
  }
}
