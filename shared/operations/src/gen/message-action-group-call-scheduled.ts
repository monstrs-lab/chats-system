import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionGroupCallScheduledValues {
  call: any
  scheduleDate: number
}

export class MessageActionGroupCallScheduled extends TLConstructor<MessageActionGroupCallScheduledValues> {
  static override CONSTRUCTOR_ID: number = -1281329567
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'call',
      type: 'InputGroupCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'schedule_date',
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

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get scheduleDate(): number {
    return this.getParamValue<number>('scheduleDate')
  }
}
