import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesRateTranscribedAudioValues {
  peer: any
  msgId: number
  transcriptionId: bigint
  good: any
}

export class MessagesRateTranscribedAudio extends TLMethod<MessagesRateTranscribedAudioValues> {
  static override CONSTRUCTOR_ID = 2132608815
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'peer',
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
      name: 'msg_id',
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
      name: 'transcription_id',
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
      name: 'good',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get peer(): any {
    return this.getParamValue<any>('peer')
  }

  get msgId(): number {
    return this.getParamValue<number>('msgId')
  }

  get transcriptionId(): bigint {
    return this.getParamValue<bigint>('transcriptionId')
  }

  get good(): any {
    return this.getParamValue<any>('good')
  }
}
