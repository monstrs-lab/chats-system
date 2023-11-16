import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsBroadcastStatsValues {
    period: any;
    followers: any;
    viewsPerPost: any;
    sharesPerPost: any;
    enabledNotifications: any;
    growthGraph: any;
    followersGraph: any;
    muteGraph: any;
    topHoursGraph: any;
    interactionsGraph: any;
    ivInteractionsGraph: any;
    viewsBySourceGraph: any;
    newFollowersBySourceGraph: any;
    languagesGraph: any;
    recentMessageInteractions: Array<any>;
}

export class StatsBroadcastStats extends TLConstructor<StatsBroadcastStatsValues> {
    static override CONSTRUCTOR_ID: number = 3187114900;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "period",
            "type": "StatsDateRangeDays",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "followers",
            "type": "StatsAbsValueAndPrev",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "views_per_post",
            "type": "StatsAbsValueAndPrev",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "shares_per_post",
            "type": "StatsAbsValueAndPrev",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "enabled_notifications",
            "type": "StatsPercentValue",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "growth_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "followers_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "mute_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "top_hours_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "interactions_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "iv_interactions_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "views_by_source_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "new_followers_by_source_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "languages_graph",
            "type": "StatsGraph",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "recent_message_interactions",
            "type": "MessageInteractionCounters",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get period(): any {
        return this.values.period
    }

    get followers(): any {
        return this.values.followers
    }

    get viewsPerPost(): any {
        return this.values.viewsPerPost
    }

    get sharesPerPost(): any {
        return this.values.sharesPerPost
    }

    get enabledNotifications(): any {
        return this.values.enabledNotifications
    }

    get growthGraph(): any {
        return this.values.growthGraph
    }

    get followersGraph(): any {
        return this.values.followersGraph
    }

    get muteGraph(): any {
        return this.values.muteGraph
    }

    get topHoursGraph(): any {
        return this.values.topHoursGraph
    }

    get interactionsGraph(): any {
        return this.values.interactionsGraph
    }

    get ivInteractionsGraph(): any {
        return this.values.ivInteractionsGraph
    }

    get viewsBySourceGraph(): any {
        return this.values.viewsBySourceGraph
    }

    get newFollowersBySourceGraph(): any {
        return this.values.newFollowersBySourceGraph
    }

    get languagesGraph(): any {
        return this.values.languagesGraph
    }

    get recentMessageInteractions(): Array<any> {
        return this.values.recentMessageInteractions
    }
}
