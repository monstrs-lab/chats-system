import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsGetAdminLogValues {
  flags: any
  channel: any
  q: string
  eventsFilter: any
  admins: Array<any>
  maxId: bigint
  minId: bigint
  limit: number
}

export class ChannelsGetAdminLog extends TLMethod<ChannelsGetAdminLogValues> {
  static override CONSTRUCTOR_ID = 870184064
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
      name: 'q',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'events_filter',
      type: 'ChannelAdminLogEventsFilter',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'admins',
      type: 'InputUser',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'max_id',
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
      name: 'min_id',
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
      name: 'limit',
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

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get q(): string {
    return this.getParamValue<string>('q')
  }

  get eventsFilter(): any {
    return this.getParamValue<any>('eventsFilter')
  }

  get admins(): Array<any> {
    return this.getParamValue<Array<any>>('admins')
  }

  get maxId(): bigint {
    return this.getParamValue<bigint>('maxId')
  }

  get minId(): bigint {
    return this.getParamValue<bigint>('minId')
  }

  get limit(): number {
    return this.getParamValue<number>('limit')
  }
}
