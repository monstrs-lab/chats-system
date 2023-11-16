import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageUploadAudioActionValues {
  progress: number
}

export class SendMessageUploadAudioAction extends TLConstructor<SendMessageUploadAudioActionValues> {
  static override CONSTRUCTOR_ID: number = -212740181
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'progress',
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

  get progress(): number {
    return this.getParamValue<number>('progress')
  }
}
