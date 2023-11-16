import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsReportAntiSpamFalsePositiveValues {
  channel: any
  msgId: number
}

export class ChannelsReportAntiSpamFalsePositive extends TLMethod<ChannelsReportAntiSpamFalsePositiveValues> {
  static override CONSTRUCTOR_ID = -1471109485
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel',
      type: 'InputChannel',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'msg_id',
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

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get msgId(): number {
    return this.getParamValue<number>('msgId')
  }
}
