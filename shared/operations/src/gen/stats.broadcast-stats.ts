import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StatsBroadcastStatsValues {
  period: any
  followers: any
  viewsPerPost: any
  sharesPerPost: any
  enabledNotifications: any
  growthGraph: any
  followersGraph: any
  muteGraph: any
  topHoursGraph: any
  interactionsGraph: any
  ivInteractionsGraph: any
  viewsBySourceGraph: any
  newFollowersBySourceGraph: any
  languagesGraph: any
  recentMessageInteractions: Array<any>
}

export class StatsBroadcastStats extends TLConstructor<StatsBroadcastStatsValues> {
  static override CONSTRUCTOR_ID: number = -1107852396
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
      name: 'followers',
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
      name: 'views_per_post',
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
      name: 'shares_per_post',
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
      name: 'enabled_notifications',
      type: 'StatsPercentValue',
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
      name: 'followers_graph',
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
      name: 'mute_graph',
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
      name: 'interactions_graph',
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
      name: 'iv_interactions_graph',
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
      name: 'views_by_source_graph',
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
      name: 'new_followers_by_source_graph',
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
      name: 'recent_message_interactions',
      type: 'MessageInteractionCounters',
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

  get followers(): any {
    return this.getParamValue<any>('followers')
  }

  get viewsPerPost(): any {
    return this.getParamValue<any>('viewsPerPost')
  }

  get sharesPerPost(): any {
    return this.getParamValue<any>('sharesPerPost')
  }

  get enabledNotifications(): any {
    return this.getParamValue<any>('enabledNotifications')
  }

  get growthGraph(): any {
    return this.getParamValue<any>('growthGraph')
  }

  get followersGraph(): any {
    return this.getParamValue<any>('followersGraph')
  }

  get muteGraph(): any {
    return this.getParamValue<any>('muteGraph')
  }

  get topHoursGraph(): any {
    return this.getParamValue<any>('topHoursGraph')
  }

  get interactionsGraph(): any {
    return this.getParamValue<any>('interactionsGraph')
  }

  get ivInteractionsGraph(): any {
    return this.getParamValue<any>('ivInteractionsGraph')
  }

  get viewsBySourceGraph(): any {
    return this.getParamValue<any>('viewsBySourceGraph')
  }

  get newFollowersBySourceGraph(): any {
    return this.getParamValue<any>('newFollowersBySourceGraph')
  }

  get languagesGraph(): any {
    return this.getParamValue<any>('languagesGraph')
  }

  get recentMessageInteractions(): Array<any> {
    return this.getParamValue<Array<any>>('recentMessageInteractions')
  }
}
