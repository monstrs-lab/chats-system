import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface GroupCallParticipantValues {
  flags: any
  muted: boolean
  left: boolean
  canSelfUnmute: boolean
  justJoined: boolean
  versioned: boolean
  min: boolean
  mutedByYou: boolean
  volumeByAdmin: boolean
  self: boolean
  videoJoined: boolean
  peer: any
  date: number
  activeDate: number
  source: number
  volume: number
  about: string
  raiseHandRating: bigint
  video: any
  presentation: any
}

export class GroupCallParticipant extends TLConstructor<GroupCallParticipantValues> {
  static override CONSTRUCTOR_ID: number = -341428482
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
      name: 'muted',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'left',
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
      name: 'can_self_unmute',
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
      name: 'just_joined',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'versioned',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'min',
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
      name: 'muted_by_you',
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
      name: 'volume_by_admin',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 10,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'self',
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
      name: 'video_joined',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 15,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'peer',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
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
      name: 'active_date',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'source',
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
      name: 'volume',
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
      name: 'about',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 11,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'raise_hand_rating',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 13,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video',
      type: 'GroupCallParticipantVideo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 6,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'presentation',
      type: 'GroupCallParticipantVideo',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 14,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get muted(): boolean {
    return this.getParamValue<boolean>('muted')
  }

  get left(): boolean {
    return this.getParamValue<boolean>('left')
  }

  get canSelfUnmute(): boolean {
    return this.getParamValue<boolean>('canSelfUnmute')
  }

  get justJoined(): boolean {
    return this.getParamValue<boolean>('justJoined')
  }

  get versioned(): boolean {
    return this.getParamValue<boolean>('versioned')
  }

  get min(): boolean {
    return this.getParamValue<boolean>('min')
  }

  get mutedByYou(): boolean {
    return this.getParamValue<boolean>('mutedByYou')
  }

  get volumeByAdmin(): boolean {
    return this.getParamValue<boolean>('volumeByAdmin')
  }

  get self(): boolean {
    return this.getParamValue<boolean>('self')
  }

  get videoJoined(): boolean {
    return this.getParamValue<boolean>('videoJoined')
  }

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }

  get activeDate(): number {
    return this.getParamValue<number>('activeDate')
  }

  get source(): number {
    return this.getParamValue<number>('source')
  }

  get volume(): number {
    return this.getParamValue<number>('volume')
  }

  get about(): string {
    return this.getParamValue<string>('about')
  }

  get raiseHandRating(): bigint {
    return this.getParamValue<bigint>('raiseHandRating')
  }

  get video(): any {
    return this.getParamValue<any>('video')
  }

  get presentation(): any {
    return this.getParamValue<any>('presentation')
  }
}
