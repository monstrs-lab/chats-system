import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PhoneEditGroupCallParticipantValues {
  flags: any
  call: any
  participant: any
  muted: any
  volume: number
  raiseHand: any
  videoStopped: any
  videoPaused: any
  presentationPaused: any
}

export class PhoneEditGroupCallParticipant extends TLMethod<PhoneEditGroupCallParticipantValues> {
  static override CONSTRUCTOR_ID = -1524155713
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
      name: 'call',
      type: 'InputGroupCall',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'participant',
      type: 'InputPeer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'muted',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
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
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'raise_hand',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_stopped',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'video_paused',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 4,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'presentation_paused',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 5,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get call(): any {
    return this.getParamValue<any>('call')
  }

  get participant(): any {
    return this.getParamValue<any>('participant')
  }

  get muted(): any {
    return this.getParamValue<any>('muted')
  }

  get volume(): number {
    return this.getParamValue<number>('volume')
  }

  get raiseHand(): any {
    return this.getParamValue<any>('raiseHand')
  }

  get videoStopped(): any {
    return this.getParamValue<any>('videoStopped')
  }

  get videoPaused(): any {
    return this.getParamValue<any>('videoPaused')
  }

  get presentationPaused(): any {
    return this.getParamValue<any>('presentationPaused')
  }
}
