import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface GroupCallValues {
  flags: any
  joinMuted: boolean
  canChangeJoinMuted: boolean
  joinDateAsc: boolean
  scheduleStartSubscribed: boolean
  canStartVideo: boolean
  recordVideoActive: boolean
  rtmpStream: boolean
  listenersHidden: boolean
  id: bigint
  accessHash: bigint
  participantsCount: number
  title: string
  streamDcId: number
  recordStartDate: number
  scheduleDate: number
  unmutedVideoCount: number
  unmutedVideoLimit: number
  version: number
}

export class GroupCall extends TLConstructor<GroupCallValues> {
  static override CONSTRUCTOR_ID: number = -711498484
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
      name: 'join_muted',
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
      name: 'can_change_join_muted',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'join_date_asc',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'schedule_start_subscribed',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 8,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'can_start_video',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 9,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'record_video_active',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'rtmp_stream',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 12,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'listeners_hidden',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
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
      name: 'access_hash',
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
      name: 'participants_count',
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
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'stream_dc_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'record_start_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'schedule_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 7,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'unmuted_video_count',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'unmuted_video_limit',
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
      name: 'version',
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

  get joinMuted(): boolean {
    return this.getParamValue<boolean>('joinMuted')
  }

  get canChangeJoinMuted(): boolean {
    return this.getParamValue<boolean>('canChangeJoinMuted')
  }

  get joinDateAsc(): boolean {
    return this.getParamValue<boolean>('joinDateAsc')
  }

  get scheduleStartSubscribed(): boolean {
    return this.getParamValue<boolean>('scheduleStartSubscribed')
  }

  get canStartVideo(): boolean {
    return this.getParamValue<boolean>('canStartVideo')
  }

  get recordVideoActive(): boolean {
    return this.getParamValue<boolean>('recordVideoActive')
  }

  get rtmpStream(): boolean {
    return this.getParamValue<boolean>('rtmpStream')
  }

  get listenersHidden(): boolean {
    return this.getParamValue<boolean>('listenersHidden')
  }

  get id(): bigint {
    return this.getParamValue<bigint>('id')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }

  get participantsCount(): number {
    return this.getParamValue<number>('participantsCount')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get streamDcId(): number {
    return this.getParamValue<number>('streamDcId')
  }

  get recordStartDate(): number {
    return this.getParamValue<number>('recordStartDate')
  }

  get scheduleDate(): number {
    return this.getParamValue<number>('scheduleDate')
  }

  get unmutedVideoCount(): number {
    return this.getParamValue<number>('unmutedVideoCount')
  }

  get unmutedVideoLimit(): number {
    return this.getParamValue<number>('unmutedVideoLimit')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }
}
