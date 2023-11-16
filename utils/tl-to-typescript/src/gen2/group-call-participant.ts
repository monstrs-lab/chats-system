import type { TLExtendedSchemaParam } from "@monstrs/mtproto-tl-types";
import { TLConstructor } from "@monstrs/mtproto-tl-core";

interface GroupCallParticipantValues {
    flags: any;
    muted: boolean;
    left: boolean;
    canSelfUnmute: boolean;
    justJoined: boolean;
    versioned: boolean;
    min: boolean;
    mutedByYou: boolean;
    volumeByAdmin: boolean;
    self: boolean;
    videoJoined: boolean;
    peer: any;
    date: number;
    activeDate: number;
    source: number;
    volume: number;
    about: string;
    raiseHandRating: bigint;
    video: any;
    presentation: any;
}

export class GroupCallParticipant extends TLConstructor<GroupCallParticipantValues> {
    static override CONSTRUCTOR_ID: number = 3953538814;
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
            "name": "muted",
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
            "name": "left",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "can_self_unmute",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 2,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "just_joined",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 4,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "versioned",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 5,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "min",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 8,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "muted_by_you",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 9,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "volume_by_admin",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 10,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "self",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 12,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "video_joined",
            "type": "true",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 15,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "peer",
            "type": "Peer",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": false,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "date",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "active_date",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 3,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "source",
            "type": "int",
            "isVector": false,
            "isFlag": false,
            "skipConstructorId": true,
            "flagGroup": 0,
            "flagIndex": -1,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "volume",
            "type": "int",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 7,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "about",
            "type": "string",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 11,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "raise_hand_rating",
            "type": "long",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": true,
            "flagGroup": 1,
            "flagIndex": 13,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "video",
            "type": "GroupCallParticipantVideo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 6,
            "flagIndicator": false,
            "useVectorId": false
          },
          {
            "name": "presentation",
            "type": "GroupCallParticipantVideo",
            "isVector": false,
            "isFlag": true,
            "skipConstructorId": false,
            "flagGroup": 1,
            "flagIndex": 14,
            "flagIndicator": false,
            "useVectorId": false
          }
        ];

    get flags(): any {
        return this.values.flags
    }

    get muted(): boolean {
        return this.values.muted
    }

    get left(): boolean {
        return this.values.left
    }

    get canSelfUnmute(): boolean {
        return this.values.canSelfUnmute
    }

    get justJoined(): boolean {
        return this.values.justJoined
    }

    get versioned(): boolean {
        return this.values.versioned
    }

    get min(): boolean {
        return this.values.min
    }

    get mutedByYou(): boolean {
        return this.values.mutedByYou
    }

    get volumeByAdmin(): boolean {
        return this.values.volumeByAdmin
    }

    get self(): boolean {
        return this.values.self
    }

    get videoJoined(): boolean {
        return this.values.videoJoined
    }

    get peer(): any {
        return this.values.peer
    }

    get date(): number {
        return this.values.date
    }

    get activeDate(): number {
        return this.values.activeDate
    }

    get source(): number {
        return this.values.source
    }

    get volume(): number {
        return this.values.volume
    }

    get about(): string {
        return this.values.about
    }

    get raiseHandRating(): bigint {
        return this.values.raiseHandRating
    }

    get video(): any {
        return this.values.video
    }

    get presentation(): any {
        return this.values.presentation
    }
}
