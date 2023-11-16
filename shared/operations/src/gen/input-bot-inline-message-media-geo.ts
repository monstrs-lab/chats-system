import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputBotInlineMessageMediaGeoValues {
  flags: any
  geoPoint: any
  heading: number
  period: number
  proximityNotificationRadius: number
  replyMarkup: any
}

export class InputBotInlineMessageMediaGeo extends TLConstructor<InputBotInlineMessageMediaGeoValues> {
  static override CONSTRUCTOR_ID: number = -1768777083
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
      flagIndex: 0,
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
    {
      name: 'reply_markup',
      type: 'ReplyMarkup',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
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

  get replyMarkup(): any {
    return this.getParamValue<any>('replyMarkup')
  }
}
