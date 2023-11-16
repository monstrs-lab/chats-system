import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsReportSpamValues {
  channel: any
  participant: any
  id: Array<number>
}

export class ChannelsReportSpam extends TLMethod<ChannelsReportSpamValues> {
  static override CONSTRUCTOR_ID = -196443371
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
      name: 'participant',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'id',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get participant(): any {
    return this.getParamValue<any>('participant')
  }

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }
}
