import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMediaGeoLiveValues {
  flags: any
  stopped: boolean
  geoPoint: any
  heading: number
  period: number
  proximityNotificationRadius: number
}

export class InputMediaGeoLive extends TLConstructor<InputMediaGeoLiveValues> {
  static override CONSTRUCTOR_ID: number = -1759532989
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
      name: 'stopped',
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
      name: 'heading',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'period',
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
      name: 'proximity_notification_radius',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get stopped(): boolean {
    return this.getParamValue<boolean>('stopped')
  }

  get geoPoint(): any {
    return this.getParamValue<any>('geoPoint')
  }

  get heading(): number {
    return this.getParamValue<number>('heading')
  }

  get period(): number {
    return this.getParamValue<number>('period')
  }

  get proximityNotificationRadius(): number {
    return this.getParamValue<number>('proximityNotificationRadius')
  }
}
