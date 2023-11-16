import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface PollResultsValues {
    flags: any;
    min: boolean;
    results: Array<any>;
    totalVoters: number;
    recentVoters: Array<bigint>;
    solution: string;
    solutionEntities: Array<any>;
}

export class PollResults extends TLConstructor<PollResultsValues> {
    static override CONSTRUCTOR_ID: number = 3703058083;
    static override PARAMS: Array<TLExtendedSchemaParam> = [
          {
            "name": "flags",
            "type": "#",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": true,
            "useVectorId": false
          },
          {
            "name": "min",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 0,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "results",
            "type": "PollAnswerVoters",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "total_voters",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "recent_voters",
            "type": "long",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": true
          },
          {
            "name": "solution",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "solution_entities",
            "type": "MessageEntity",
            "isVector": true,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": true
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get min(): boolean {
        return this.values.min
    }

    get results(): Array<any> {
        return this.values.results
    }

    get totalVoters(): number {
        return this.values.totalVoters
    }

    get recentVoters(): Array<bigint> {
        return this.values.recentVoters
    }

    get solution(): string {
        return this.values.solution
    }

    get solutionEntities(): Array<any> {
        return this.values.solutionEntities
    }
}
