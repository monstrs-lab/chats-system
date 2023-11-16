import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StatsMegagroupStatsValues {
  period: any
  members: any
  messages: any
  viewers: any
  posters: any
  growthGraph: any
  membersGraph: any
  newMembersBySourceGraph: any
  languagesGraph: any
  messagesGraph: any
  actionsGraph: any
  topHoursGraph: any
  weekdaysGraph: any
  topPosters: Array<any>
  topAdmins: Array<any>
  topInviters: Array<any>
  users: Array<any>
}

export class StatsMegagroupStats extends TLConstructor<StatsMegagroupStatsValues> {
  static override CONSTRUCTOR_ID: number = -276825834
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'period',
      type: 'StatsDateRangeDays',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'members',
      type: 'StatsAbsValueAndPrev',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'messages',
      type: 'StatsAbsValueAndPrev',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'viewers',
      type: 'StatsAbsValueAndPrev',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'posters',
      type: 'StatsAbsValueAndPrev',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'growth_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'members_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_members_by_source_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'languages_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'messages_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'actions_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'top_hours_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'weekdays_graph',
      type: 'StatsGraph',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'top_posters',
      type: 'StatsGroupTopPoster',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'top_admins',
      type: 'StatsGroupTopAdmin',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'top_inviters',
      type: 'StatsGroupTopInviter',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get period(): any {
    return this.getParamValue<any>('period')
  }

  get members(): any {
    return this.getParamValue<any>('members')
  }

  get messages(): any {
    return this.getParamValue<any>('messages')
  }

  get viewers(): any {
    return this.getParamValue<any>('viewers')
  }

  get posters(): any {
    return this.getParamValue<any>('posters')
  }

  get growthGraph(): any {
    return this.getParamValue<any>('growthGraph')
  }

  get membersGraph(): any {
    return this.getParamValue<any>('membersGraph')
  }

  get newMembersBySourceGraph(): any {
    return this.getParamValue<any>('newMembersBySourceGraph')
  }

  get languagesGraph(): any {
    return this.getParamValue<any>('languagesGraph')
  }

  get messagesGraph(): any {
    return this.getParamValue<any>('messagesGraph')
  }

  get actionsGraph(): any {
    return this.getParamValue<any>('actionsGraph')
  }

  get topHoursGraph(): any {
    return this.getParamValue<any>('topHoursGraph')
  }

  get weekdaysGraph(): any {
    return this.getParamValue<any>('weekdaysGraph')
  }

  get topPosters(): Array<any> {
    return this.getParamValue<Array<any>>('topPosters')
  }

  get topAdmins(): Array<any> {
    return this.getParamValue<Array<any>>('topAdmins')
  }

  get topInviters(): Array<any> {
    return this.getParamValue<Array<any>>('topInviters')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
