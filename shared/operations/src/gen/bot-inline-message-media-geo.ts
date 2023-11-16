import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface BotInlineMessageMediaGeoValues {
  flags: any
  geo: any
  heading: number
  period: number
  proximityNotificationRadius: number
  replyMarkup: any
}

export class BotInlineMessageMediaGeo extends TLConstructor<BotInlineMessageMediaGeoValues> {
  static override CONSTRUCTOR_ID: number = 85477117
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
      name: 'geo',
      type: 'GeoPoint',
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

  get geo(): any {
    return this.getParamValue<any>('geo')
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
