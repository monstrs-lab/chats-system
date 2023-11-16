import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface StatsMegagroupStatsValues {
    period: any;
    members: any;
    messages: any;
    viewers: any;
    posters: any;
    growthGraph: any;
    membersGraph: any;
    newMembersBySourceGraph: any;
    languagesGraph: any;
    messagesGraph: any;
    actionsGraph: any;
    topHoursGraph: any;
    weekdaysGraph: any;
    topPosters: Array<any>;
    topAdmins: Array<any>;
    topInviters: Array<any>;
    users: Array<any>;
}

export class StatsMegagroupStats extends TLConstructor<StatsMegagroupStatsValues> {
    static override CONSTRUCTOR_ID: number = 4018141462;
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
            "name": "members",
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
            "name": "messages",
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
            "name": "viewers",
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
            "name": "posters",
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
            "name": "members_graph",
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
            "name": "new_members_by_source_graph",
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
            "name": "messages_graph",
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
            "name": "actions_graph",
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
            "name": "weekdays_graph",
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
            "name": "top_posters",
            "type": "StatsGroupTopPoster",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "top_admins",
            "type": "StatsGroupTopAdmin",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "top_inviters",
            "type": "StatsGroupTopInviter",
            "isVector": true,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "users",
            "type": "User",
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

    get members(): any {
        return this.values.members
    }

    get messages(): any {
        return this.values.messages
    }

    get viewers(): any {
        return this.values.viewers
    }

    get posters(): any {
        return this.values.posters
    }

    get growthGraph(): any {
        return this.values.growthGraph
    }

    get membersGraph(): any {
        return this.values.membersGraph
    }

    get newMembersBySourceGraph(): any {
        return this.values.newMembersBySourceGraph
    }

    get languagesGraph(): any {
        return this.values.languagesGraph
    }

    get messagesGraph(): any {
        return this.values.messagesGraph
    }

    get actionsGraph(): any {
        return this.values.actionsGraph
    }

    get topHoursGraph(): any {
        return this.values.topHoursGraph
    }

    get weekdaysGraph(): any {
        return this.values.weekdaysGraph
    }

    get topPosters(): Array<any> {
        return this.values.topPosters
    }

    get topAdmins(): Array<any> {
        return this.values.topAdmins
    }

    get topInviters(): Array<any> {
        return this.values.topInviters
    }

    get users(): Array<any> {
        return this.values.users
    }
}
