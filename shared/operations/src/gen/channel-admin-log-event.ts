import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventValues {
  id: bigint
  date: number
  userId: bigint
  action: any
}

export class ChannelAdminLogEvent extends TLConstructor<ChannelAdminLogEventValues> {
  static override CONSTRUCTOR_ID: number = 531458253
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'user_id',
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
      name: 'action',
      type: 'ChannelAdminLogEventAction',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get action(): any {
    return this.getParamValue<any>('action')
  }
}
