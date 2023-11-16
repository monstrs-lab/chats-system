import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsGetLocatedValues {
  flags: any
  background: boolean
  geoPoint: any
  selfExpires: number
}

export class ContactsGetLocated extends TLMethod<ContactsGetLocatedValues> {
  static override CONSTRUCTOR_ID = -750207932
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
      name: 'background',
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
      name: 'geo_point',
      type: 'InputGeoPoint',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'self_expires',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get background(): boolean {
    return this.getParamValue<boolean>('background')
  }

  get geoPoint(): any {
    return this.getParamValue<any>('geoPoint')
  }

  get selfExpires(): number {
    return this.getParamValue<number>('selfExpires')
  }
}
